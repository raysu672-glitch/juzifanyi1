// 大作文观点句翻译练习 - 第1句

export interface TranslationStep {
  label: string;
  chinese: string;
  hint: string;
  correctAnswer: string;
  keywords?: string[];
}

export interface SentenceExercise {
  category: string;
  fullChinese: string;
  steps: TranslationStep[];
  finalEnglish: string;
  logicExplanation: string;
}

export const EXERCISES: SentenceExercise[] = [
  {
    category: "网络科技类",
    fullChinese: "互联网最大的优势在于它极大地简化了人与人之间的沟通。",
    finalEnglish: "The greatest advantage of the internet is that it makes communication much easier between people.",
    logicExplanation: "这是一个包含宾语从句的句子。主句是'最大的优势在于'，宾语从句说明优势的具体内容。'极大地'修饰'简化'，'人与人之间的'修饰'沟通'。",
    steps: [
      {
        label: "核心骨架",
        chinese: "最大的优势 是 [这件事]",
        hint: "使用 'The greatest advantage is that...' 结构，that引导宾语从句。",
        correctAnswer: "The greatest advantage is that",
        keywords: ["Greatest (最大的)", "Advantage (优势)"]
      },
      {
        label: "展开宾语从句",
        chinese: "最大的优势是 [它简化了沟通]",
        hint: "从句主语是'it'（互联网），谓语是'makes'，宾语是'communication'。",
        correctAnswer: "The greatest advantage is that it makes communication",
        keywords: ["Make (使/简化)", "Communication (沟通)"]
      },
      {
        label: "添加修饰语",
        chinese: "最大的优势是 [它极大地简化了人与人之间的沟通]",
        hint: "极大地：much easier；人与人之间的：between people。",
        correctAnswer: "The greatest advantage is that it makes communication much easier between people",
        keywords: ["Much easier (更容易/极大地简化)", "Between people (人与人之间)"]
      }
    ]
  }
];
