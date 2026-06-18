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
  Trophy
} from "lucide-react";
import { useState } from "react";
import { EXERCISES } from "./data";

export default function App() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentExercise = EXERCISES[currentSentenceIndex];
  const currentStep = currentExercise.steps[currentStepIndex];

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
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setUserInput("");
    setShowFeedback(false);
    setIsFinished(false);
    setShowHint(false);
    setCurrentSentenceIndex((prev) => (prev + 1) % EXERCISES.length);
  };

  const isCorrect = normalize(userInput) === normalize(currentStep.correctAnswer);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl text-white">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">大作文观点句翻译训练</h1>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">著作权：藕叶英语 苏宁</div>
            <div className="text-xs text-slate-500">{currentExercise.category}</div>
            <div className="flex -space-x-2">
              {EXERCISES.slice(0, 10).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full border-2 border-white ${
                    i === currentSentenceIndex % 10 ? "bg-indigo-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <div className="text-xs text-slate-400">句子 {currentSentenceIndex + 1} / {EXERCISES.length}</div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Full Chinese Sentence Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-3 text-indigo-600">
                  <LineChart className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">当前目标句子</span>
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-800">
                  {currentExercise.fullChinese}
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex gap-2 mb-2">
                {currentExercise.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      idx <= currentStepIndex ? "bg-indigo-600" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Step Card */}
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Sparkles className="w-24 h-24" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase">
                      第 {currentStepIndex + 1} 步: {currentStep.label}
                    </span>
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        showHint
                          ? "bg-amber-100 text-amber-700 shadow-inner"
                          : "bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
                      }`}
                    >
                      <Lightbulb className={`w-4 h-4 ${showHint ? "fill-amber-400" : ""}`} />
                      {showHint ? "隐藏提示" : "获取提示"}
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-start gap-4">
                    <ArrowRight className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
                    请翻译: <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">{currentStep.chinese}</span>
                  </h3>

                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 space-y-3"
                    >
                      <div className="p-4 bg-amber-50 rounded-xl text-sm text-amber-800 border border-amber-100">
                        <div className="font-bold flex items-center gap-2 mb-1">
                          <Lightbulb className="w-4 h-4" /> 结构提示
                        </div>
                        {currentStep.hint}
                      </div>

                      {currentStep.keywords && (
                        <div className="flex flex-wrap gap-2">
                          {currentStep.keywords.map((word, i) => (
                            <span key={i} className="px-2 py-1 bg-white border border-amber-200 text-[10px] font-bold text-amber-600 rounded-lg shadow-sm">
                              {word}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}

                  <div className="relative group">
                    <textarea
                      className={`w-full p-4 rounded-2xl border-2 bg-slate-50 text-lg font-mono transition-all focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
                        showFeedback
                          ? isCorrect ? "border-green-400" : "border-red-300"
                          : "border-slate-100 group-hover:border-indigo-100 focus:border-indigo-400"
                      }`}
                      rows={3}
                      placeholder="在此处输入英文翻译..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      disabled={showFeedback && isCorrect}
                    />
                    {showFeedback && (
                      <div className="mt-4 animate-in fade-in slide-in-from-top-1">
                        {isCorrect ? (
                          <div className="flex items-center gap-3 text-green-600 font-bold">
                            <CheckCircle2 className="w-6 h-6" />
                            <span>完美！进入下一步。</span>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="text-red-500 font-bold">试试修正或查看正确答案？</div>
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 text-sm italic">
                              正确参考：{currentStep.correctAnswer}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex gap-4">
                    {!showFeedback ? (
                      <button
                        onClick={handleCheck}
                        disabled={!userInput.trim()}
                        className="flex-1 bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 active:scale-95"
                      >
                        检查翻译
                      </button>
                    ) : (
                      <button
                        onClick={isCorrect ? handleNext : () => setShowFeedback(false)}
                        className={`flex-1 font-bold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                          isCorrect
                            ? "bg-green-600 text-white hover:bg-green-700 shadow-green-200"
                            : "bg-slate-200 text-slate-700 hover:bg-slate-300 shadow-slate-100"
                        }`}
                      >
                        {isCorrect ? (
                          <>下一步 <ChevronRight className="w-5 h-5" /></>
                        ) : (
                          "返回修改"
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="congratulations"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl text-center space-y-8 border-4 border-indigo-50"
            >
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-12 h-12 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">练习完成!</h2>
                <p className="text-slate-500">你已经成功解构并翻译了这句长难句。</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-3xl text-left space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">完整译文</label>
                  <p className="text-xl font-bold text-indigo-900 leading-snug">{currentExercise.finalEnglish}</p>
                </div>
                <div className="pt-4 border-t border-indigo-100">
                  <label className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">结构深度解析</label>
                  <p className="text-sm text-indigo-800/80 leading-relaxed">{currentExercise.logicExplanation}</p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-slate-900 text-white font-bold py-5 rounded-3xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <RefreshCcw className="w-5 h-5" /> 换一个句子继续练习
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="mt-12 text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
        Step-by-Step Language Mastery System
      </footer>
    </div>
  );
}