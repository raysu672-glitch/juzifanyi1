import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ChevronRight, 
  RefreshCcw, 
  LineChart, 
  BrainCircuit, 
  Lightbulb,
  ArrowRight,
  Sparkles,
  Trophy,
  ChevronLeft,
  Laptop,
  HeartPulse,
  Newspaper,
  Music,
  Building,
  Car,
  GraduationCap,
  Check,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";
import { getCategoriesData } from "./data/sentences";

const CATEGORIES_DATA = getCategoriesData();

export default function App() {
  // Screen views: "categories" | "sentences" | "practice"
  const [currentView, setCurrentView] = useState<"categories" | "sentences" | "practice">("categories");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("tech_media");
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>("");
  const [completedExerciseIds, setCompletedExerciseIds] = useState<string[]>([]);
  
  // Practice states
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Load persistence cache
  useEffect(() => {
    const saved = localStorage.getItem("juzi_completed_exercise_ids");
    if (saved) {
      try {
        setCompletedExerciseIds(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse completion indices", err);
      }
    }
  }, []);

  // Save persistence cache
  const saveCompleted = (ids: string[]) => {
    setCompletedExerciseIds(ids);
    localStorage.setItem("juzi_completed_exercise_ids", JSON.stringify(ids));
  };

  const selectedCategory = CATEGORIES_DATA.find(c => c.id === selectedCategoryId) || CATEGORIES_DATA[0];
  const currentExercise = selectedCategory.exercises.find(e => e.id === selectedExerciseId) || selectedCategory.exercises[0];
  const currentStep = currentExercise?.steps[currentStepIndex];

  const normalize = (str: string) => str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").trim();

  const handleCheck = () => {
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentStepIndex < currentExercise.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setUserInput("");
      setShowFeedback(false);
      setShowHint(false);
    } else {
      setIsFinished(true);
      // Mark as completed
      if (!completedExerciseIds.includes(currentExercise.id)) {
        saveCompleted([...completedExerciseIds, currentExercise.id]);
      }
    }
  };

  const handleClosePractice = () => {
    setCurrentView("sentences");
    setUserInput("");
    setShowFeedback(false);
    setShowHint(false);
    setIsFinished(false);
    setCurrentStepIndex(0);
  };

  const handleResetPractice = () => {
    setCurrentStepIndex(0);
    setUserInput("");
    setShowFeedback(false);
    setIsFinished(false);
    setShowHint(false);
  };

  const isCorrect = currentStep ? normalize(userInput) === normalize(currentStep.correctAnswer) : false;

  // Render Category Icon Component helper
  const renderCategoryIcon = (iconName: string, colorClass: string) => {
    const props = { className: "w-5 h-5 text-white" };
    switch (iconName) {
      case "Laptop": return <div className={`p-2.5 rounded-xl bg-indigo-600`}> <Laptop {...props} /> </div>;
      case "HeartPulse": return <div className={`p-2.5 rounded-xl bg-emerald-600`}> <HeartPulse {...props} /> </div>;
      case "Newspaper": return <div className={`p-2.5 rounded-xl bg-amber-500`}> <Newspaper {...props} /> </div>;
      case "Music": return <div className={`p-2.5 rounded-xl bg-pink-500`}> <Music {...props} /> </div>;
      case "Building": return <div className={`p-2.5 rounded-xl bg-rose-600`}> <Building {...props} /> </div>;
      case "Car": return <div className={`p-2.5 rounded-xl bg-blue-600`}> <Car {...props} /> </div>;
      case "GraduationCap": return <div className={`p-2.5 rounded-xl bg-violet-600`}> <GraduationCap {...props} /> </div>;
      default: return <div className="p-2.5 rounded-xl bg-slate-600"> <BrainCircuit {...props} /> </div>;
    }
  };

  // Calculate stats
  const totalSentencesCount = CATEGORIES_DATA.reduce((acc, cat) => acc + cat.exercises.length, 0);
  const completedSentencesCount = completedExerciseIds.length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4 font-sans antialiased text-slate-800">
      <div className="max-w-3xl w-full flex-grow">
        
        {/* UPPER MAIN HEADER (CONSTANT) */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200/60 pb-5">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-md shadow-indigo-100">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none mb-1">句子翻译专项训练</h1>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">按大作文经典维度，循序渐进搭建高级长难句</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">著作权：藕叶英语 苏宁</div>
            {/* Global Progress pill */}
            <div className="bg-slate-200/60 text-slate-600 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-slate-300/20">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              已通关: {completedSentencesCount}/{totalSentencesCount}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ======================= SCREEN 1: CATEGORY SELECTION ======================= */}
          {currentView === "categories" && (
            <motion.div
              key="categories_screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Introduction Banner */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden flex items-center justify-between">
                <div className="space-y-2 z-10 relative max-w-[80%]">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Sparkles className="w-4 h-4 fill-indigo-100" />
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">大作文高分句法系统</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">请选择作文类别开始训练</h2>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    本系统精心收录大作文最强提分语段，每个分类包含对应的长难句，以中文为跳板，由浅入深训练英语逻辑主干。
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 top-0 p-4 opacity-5 pointer-events-none select-none">
                  <Award className="w-40 h-40" />
                </div>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CATEGORIES_DATA.map((category) => {
                  const completedInCat = category.exercises.filter(ex => completedExerciseIds.includes(ex.id)).length;
                  const totalInCat = category.exercises.length;
                  const ratio = totalInCat > 0 ? (completedInCat / totalInCat) * 100 : 0;
                  
                  return (
                    <motion.div
                      whileHover={{ scale: 1.01, translateY: -2 }}
                      whileTap={{ scale: 0.99 }}
                      key={category.id}
                      onClick={() => {
                        setSelectedCategoryId(category.id);
                        setCurrentView("sentences");
                      }}
                      className="cursor-pointer bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-50/50 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="flex gap-4 items-start mb-4">
                        {renderCategoryIcon(category.iconName, category.themeColor)}
                        <div className="space-y-1">
                          <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600">{category.name}</h3>
                          <p className="text-xs text-slate-400 leading-normal line-clamp-2">{category.description}</p>
                        </div>
                      </div>
                      
                      {/* Sub progress */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-slate-400">训练进度</span>
                          <span className="text-slate-800 font-mono">{completedInCat} / {totalInCat} 句</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-600 rounded-full transition-all duration-500" 
                            style={{ width: `${ratio}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ======================= SCREEN 2: SENTENCE LIST (CHINESE ONLY) ======================= */}
          {currentView === "sentences" && (
            <motion.div
              key="sentences_screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Category Breadcrumb */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setCurrentView("categories")}
                  className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> 返回分类
                </button>
                <span className="text-xs font-mono font-bold text-slate-400">大作文观点句集合</span>
              </div>

              {/* Title Section */}
              <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl flex items-center justify-between relative overflow-hidden">
                <div className="space-y-1 z-10 relative">
                  <div className="inline-block px-2.5 py-0.5 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    当前分类
                  </div>
                  <h2 className="text-xl font-bold">{selectedCategory.name}</h2>
                  <p className="text-xs text-slate-300 leading-normal max-w-lg">{selectedCategory.description}</p>
                </div>
                <div className="opacity-15 shrink-0 z-0 absolute right-4 scale-150">
                  {renderCategoryIcon(selectedCategory.iconName, selectedCategory.themeColor)}
                </div>
              </div>

              {/* List of Chinese sentences */}
              <div className="space-y-3">
                {selectedCategory.exercises.map((exercise, index) => {
                  const isCompleted = completedExerciseIds.includes(exercise.id);
                  return (
                    <motion.div
                      key={exercise.id}
                      whileHover={{ scale: 1.005 }}
                      onClick={() => {
                        setSelectedExerciseId(exercise.id);
                        setCurrentStepIndex(0);
                        setUserInput("");
                        setShowFeedback(false);
                        setShowHint(false);
                        setIsFinished(false);
                        setCurrentView("practice");
                      }}
                      className={`cursor-pointer p-5 bg-white rounded-xl border transition-all duration-200 hover:shadow-md flex items-start justify-between gap-4 ${
                        isCompleted ? "border-emerald-200/80 bg-emerald-50/10 hover:border-emerald-400/50" : "border-slate-200 hover:border-indigo-400/40"
                      }`}
                    >
                      <div className="space-y-2 flex-grow">
                        <div className="flex items-center gap-2">
                          <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                            isCompleted ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                          }`}>
                            句 {exercise.num}
                          </span>
                          {isCompleted && (
                            <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-100/40 px-2 py-0.5 rounded-full border border-emerald-200/30">
                              <Check className="w-3 h-3" /> 已通关
                            </span>
                          )}
                        </div>
                        <p className="text-slate-800 text-sm font-medium leading-relaxed">
                          {exercise.fullChinese}
                        </p>
                      </div>
                      
                      <div className="shrink-0 pt-3">
                        <div className={`p-1.5 rounded-lg border ${
                          isCompleted ? "border-emerald-200 text-emerald-600 bg-white" : "border-slate-200 text-slate-400 bg-slate-50"
                        }`}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ======================= SCREEN 3: INTERACTIVE TRANSLATION PRACTICE ======================= */}
          {currentView === "practice" && (
            <motion.div
              key="practice_screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              
              {/* Top back & stats indicator */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleClosePractice}
                  className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> 退出此题
                </button>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>分类:</span>
                  <span className="font-bold text-slate-600">{selectedCategory.name}</span>
                  <span className="font-mono bg-indigo-50 border border-indigo-100/50 text-indigo-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    第 {currentExercise.num} 句
                  </span>
                </div>
              </div>

              {!isFinished ? (
                <div className="space-y-6">
                  {/* Full Target Chinese Banner */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-indigo-600">
                      <LineChart className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-wider">本句完整翻译目标</span>
                    </div>
                    <p className="text-base font-medium leading-relaxed text-slate-800">
                      {currentExercise.fullChinese}
                    </p>
                  </div>

                  {/* Progress Step Nodes */}
                  <div className="flex gap-2">
                    {currentExercise.steps.map((step, idx) => (
                      <div 
                        key={idx}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                          idx <= currentStepIndex ? "bg-indigo-600" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Active Translation Step Card */}
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-indigo-100/30 border border-indigo-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none select-none">
                      <Sparkles className="w-24 h-24 text-indigo-700" />
                    </div>

                    <div className="relative z-10 space-y-6">
                      
                      {/* Step index & Hint toggle */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black rounded-full uppercase tracking-wider">
                          步骤 {currentStepIndex + 1} / {currentExercise.steps.length}: {currentStep.label}
                        </span>
                        
                        <button 
                          onClick={() => setShowHint(!showHint)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                            showHint 
                              ? "bg-amber-50 text-amber-700 border-amber-200 shadow-inner" 
                              : "bg-slate-50 text-slate-400 border-slate-100 hover:bg-indigo-50 hover:text-indigo-600"
                          }`}
                        >
                          <Lightbulb className={`w-3.5 h-3.5 ${showHint ? "fill-amber-400 text-amber-600" : ""}`} />
                          {showHint ? "隐藏秘籍" : "提分秘籍"}
                        </button>
                      </div>

                      {/* Targeted Sub-sentence translation instruction */}
                      <div className="space-y-1.5">
                        <span className="text-xs text-slate-400 font-bold tracking-wider block uppercase">当前拆解句子:</span>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-normal">
                          {currentStep.chinese}
                        </h3>
                      </div>

                      {/* Displaying Hint block dynamically */}
                      {showHint && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="space-y-3"
                        >
                          <div className="p-4 bg-amber-50/80 rounded-xl text-xs text-amber-800 border border-amber-100 leading-relaxed">
                            <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-900 text-xs">
                              <Lightbulb className="w-4 h-4 shrink-0 text-amber-600 fill-amber-300" />
                              句架及语序点拨：
                            </div>
                            {currentStep.hint}
                          </div>

                          {currentStep.keywords && (
                            <div className="flex flex-wrap gap-1.5">
                              {currentStep.keywords.map((word, i) => (
                                <span key={i} className="px-2 py-0.5 bg-amber-50 text-[10px] font-bold text-amber-700 rounded-md border border-amber-200/55 shadow-sm">
                                  {word}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* User response editor area */}
                      <div className="space-y-2">
                        <textarea 
                          className={`w-full p-4 rounded-xl border-2 bg-slate-50 font-mono text-base transition-all focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
                            showFeedback 
                              ? isCorrect ? "border-green-400 bg-green-50/10 text-green-900" : "border-red-300 bg-red-50/5 text-slate-800"
                              : "border-slate-100 hover:border-slate-200 focus:border-indigo-500"
                          }`}
                          rows={3}
                          placeholder="请输入针对此段落的英文翻译..."
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          disabled={showFeedback && isCorrect}
                        />

                        {showFeedback && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm mt-3"
                          >
                            {isCorrect ? (
                              <div className="flex items-center gap-2 text-green-700 font-bold bg-green-100/55 p-3 rounded-xl border border-green-200">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                                <span>翻译正确，太棒了！</span>
                              </div>
                            ) : (
                              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2.5">
                                <div className="text-red-500 font-bold flex items-center gap-1.5 text-xs">
                                  <span className="w-2 h-2 rounded-full bg-red-500"></span> 翻译失误，请对比修改：
                                </div>
                                <div className="p-3 bg-red-100/10 border border-red-200/40 rounded-lg text-slate-500 text-sm font-mono select-all">
                                  {currentStep.correctAnswer}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>

                      {/* Primary operation controls */}
                      <div className="flex gap-4 pt-3">
                        {!showFeedback ? (
                          <button 
                            onClick={handleCheck}
                            disabled={!userInput.trim()}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-100 active:scale-95 text-sm"
                          >
                            验证翻译
                          </button>
                        ) : (
                          <button 
                            onClick={isCorrect ? handleNext : () => setShowFeedback(false)}
                            className={`flex-1 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md ${
                              isCorrect 
                                ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100" 
                                : "bg-slate-300 hover:bg-slate-400 text-slate-700 shadow-slate-100"
                            }`}
                          >
                            {isCorrect ? (
                              <>连贯下一步 <ChevronRight className="w-4 h-4" /></>
                            ) : (
                              "返回调整"
                            )}
                          </button>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              ) : (
                /* ======================= SCREEN 3 SUBSTATE: ANALYSIS & COMPLETE ======================= */
                <motion.div
                  key="congratulations"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl text-center space-y-6 border border-slate-200"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8 text-emerald-600" />
                  </div>
                  
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-slate-900">恭喜通关此题!</h2>
                    <p className="text-xs text-slate-400">你已经成功解构并还原了该大作文核心句。</p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl text-left space-y-4 border border-slate-200/80">
                    <div>
                      <span className="text-[9px] font-black uppercase text-indigo-500 tracking-widest block mb-1">
                        高分推荐译文 (Perfect Composition)
                      </span>
                      <p className="text-base font-bold text-slate-900 leading-relaxed font-mono select-all">
                        {currentExercise.finalEnglish}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-slate-200/60">
                      <span className="text-[9px] font-black uppercase text-indigo-500 tracking-widest block mb-1">
                        核心高分句型深度解析
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {currentExercise.logicExplanation}
                      </p>
                    </div>
                  </div>

                  {/* Operation tools */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <button 
                      onClick={handleClosePractice}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm active:scale-95 shadow-md"
                    >
                      <Check className="w-4 h-4" /> 返回句子大板块
                    </button>
                    
                    <button 
                      onClick={handleResetPractice}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                    >
                      <RefreshCcw className="w-3.5 h-3.5" /> 重新练习本句
                    </button>
                  </div>
                </motion.div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <footer className="mt-12 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
        藕叶英语 · SENTENCE TRANSLATION COGNITIVE ENGINE
      </footer>
    </div>
  );
}
