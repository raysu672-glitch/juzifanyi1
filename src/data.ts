// 大作文观点句翻译练习数据
// 共20个句子示例

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
  // ========== 网络科技类 ==========
  {
    category: "网络科技类",
    fullChinese: "互联网最大的优势在于它极大地简化了人与人之间的沟通。",
    finalEnglish: "The greatest advantage of the internet is that it makes communication much easier between people.",
    logicExplanation: "这是一个包含宾语从句的句子。主句是'最大的优势在于'，宾语从句说明优势的具体内容。",
    steps: [
      {
        label: "核心骨架",
        chinese: "最大的优势 是 [这件事]",
        hint: "使用 'The greatest advantage is that...' 结构。",
        correctAnswer: "The greatest advantage is that",
        keywords: ["Greatest (最大的)", "Advantage (优势)"]
      },
      {
        label: "展开宾语从句",
        chinese: "最大的优势是 [它简化了沟通]",
        hint: "从句主语是'it'，谓语是'makes'。",
        correctAnswer: "The greatest advantage is that it makes communication",
        keywords: ["Make (使)", "Communication (沟通)"]
      },
      {
        label: "添加修饰语",
        chinese: "最大的优势是 [它极大地简化了人与人之间的沟通]",
        hint: "极大地：much easier；人与人之间的：between people。",
        correctAnswer: "The greatest advantage is that it makes communication much easier between people",
        keywords: ["Much easier (更容易)", "Between people (人与人之间)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "例如，一些留学的学生无需担心思乡之情带来的困扰，因为他们可以通过FaceTime等即时通讯工具与家人保持日常联系。",
    finalEnglish: "For example, when some students studying abroad, they would not be bothered by the problem of homesickness, as they are enabled by instant communication tools, such as Facetime, to talk with their families on a daily basis.",
    logicExplanation: "这是一个复合句。'例如'是过渡词，主句说明学生不会被思乡困扰，原因状语说明这是因为即时通讯工具。",
    steps: [
      {
        label: "引入例子",
        chinese: "例如，一些留学的学生",
        hint: "例如：For example；留学的学生：students studying abroad。",
        correctAnswer: "For example, when some students studying abroad",
        keywords: ["For example (例如)", "Studying abroad (留学)"]
      },
      {
        label: "主句核心",
        chinese: "他们无需担心思乡之情带来的困扰",
        hint: "思乡之情：homesickness。",
        correctAnswer: "For example, when some students studying abroad, they would not be bothered by the problem of homesickness",
        keywords: ["Be bothered (被困扰)", "Homesickness (思乡之情)"]
      },
      {
        label: "添加原因状语",
        chinese: "因为他们可以通过即时通讯工具与家人保持日常联系",
        hint: "即时通讯工具：instant communication tools。",
        correctAnswer: "For example, when some students studying abroad, they would not be bothered by the problem of homesickness, as they are enabled by instant communication tools to talk with their families on a daily basis",
        keywords: ["Instant communication tools (即时通讯工具)", "On a daily basis (日常)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "此外，患有相同疾病的患者还能建立在线社区，在那里分享战胜疾病的励志故事以及有助于康复的实用信息。",
    finalEnglish: "In addition, people suffering from the same disease are able to establish an online community where they can share inspiring stories of fighting diseases as well as useful information for recovery.",
    logicExplanation: "这是一个包含定语从句的句子。主句说明患者能建立在线社区，定语从句说明社区的功能。",
    steps: [
      {
        label: "过渡词与主语",
        chinese: "此外，患有相同疾病的患者",
        hint: "此外：In addition；患有...的：suffering from...。",
        correctAnswer: "In addition, people suffering from the same disease",
        keywords: ["In addition (此外)", "Suffer from (患有)"]
      },
      {
        label: "主句谓语",
        chinese: "他们能够建立在线社区",
        hint: "在线社区：online community。",
        correctAnswer: "In addition, people suffering from the same disease are able to establish an online community",
        keywords: ["Establish (建立)", "Online community (在线社区)"]
      },
      {
        label: "添加定语从句",
        chinese: "在那里他们可以分享励志故事和实用信息",
        hint: "定语从句用 where 引导。",
        correctAnswer: "In addition, people suffering from the same disease are able to establish an online community where they can share inspiring stories as well as useful information",
        keywords: ["Where (在那里)", "Inspiring (励志的)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "科技能够有效助力传统技能与生活方式的传承。",
    finalEnglish: "Technology can positively contribute to the keeping alive of traditional skills and ways of life.",
    logicExplanation: "简单句。主语是'科技'，谓语是'能够助力'，宾语是'传承'。",
    steps: [
      {
        label: "核心骨架",
        chinese: "科技能够助力传承",
        hint: "助力：contribute to；传承：keeping alive。",
        correctAnswer: "Technology can contribute to the keeping alive",
        keywords: ["Technology (科技)", "Contribute to (助力)"]
      },
      {
        label: "添加修饰语",
        chinese: "科技能够有效助力传统技能与生活方式的传承",
        hint: "有效：positively；传统技能：traditional skills。",
        correctAnswer: "Technology can positively contribute to the keeping alive of traditional skills and ways of life",
        keywords: ["Positively (有效地)", "Traditional skills (传统技能)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "例如，某些岛屿的人口过于稀少，难以建立正规学校。",
    finalEnglish: "For example, the populations of some islands are too small to have normal schools.",
    logicExplanation: "简单句。使用'too...to...'结构表示'太...以至于不能...'。",
    steps: [
      {
        label: "引入例子",
        chinese: "例如，某些岛屿的人口",
        hint: "例如：For example。",
        correctAnswer: "For example, the populations of some islands",
        keywords: ["For example (例如)", "Populations (人口)"]
      },
      {
        label: "完整句子",
        chinese: "人口过于稀少，难以建立正规学校",
        hint: "使用 too...to... 结构。",
        correctAnswer: "For example, the populations of some islands are too small to have normal schools",
        keywords: ["Too small (过于稀少)", "Normal schools (正规学校)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "教育部门并未通过将儿童送往大陆而拆散家庭，而是利用互联网实现了在线教育。",
    finalEnglish: "Rather than breaking up families by sending children to the mainland, education authorities have been able to use the Internet to deliver schooling online.",
    logicExplanation: "使用'rather than...'结构表示'没有...而是...'。",
    steps: [
      {
        label: "对比做法",
        chinese: "并未通过将儿童送往大陆而拆散家庭",
        hint: "使用 Rather than 开头。",
        correctAnswer: "Rather than breaking up families by sending children to the mainland",
        keywords: ["Rather than (而不是)", "Breaking up (拆散)"]
      },
      {
        label: "实际做法",
        chinese: "教育部门利用互联网实现了在线教育",
        hint: "教育部门：education authorities。",
        correctAnswer: "Rather than breaking up families by sending children to the mainland, education authorities have been able to use the Internet to deliver schooling online",
        keywords: ["Education authorities (教育部门)", "Deliver schooling (提供教育)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "此外，互联网与现代冷藏技术正被用于保护鲑鱼养殖的传统技艺,因为如今鲑鱼产品可从全球任何地方订购并配送至目的地。",
    finalEnglish: "In addition, the Internet, and modern refrigeration techniques, are being used to keep alive the traditional skills of producing salmon, because it can now be ordered from, and delivered to, anywhere in the world.",
    logicExplanation: "复合句。主句说明互联网和冷藏技术被用于保护传统技艺，原因状语说明这是因为鲑鱼可以全球订购配送。",
    steps: [
      {
        label: "主句主语",
        chinese: "此外，互联网与现代冷藏技术",
        hint: "冷藏技术：refrigeration techniques。",
        correctAnswer: "In addition, the Internet, and modern refrigeration techniques",
        keywords: ["In addition (此外)", "Refrigeration techniques (冷藏技术)"]
      },
      {
        label: "主句谓语",
        chinese: "正被用于保护鲑鱼养殖的传统技艺",
        hint: "鲑鱼养殖：producing salmon。",
        correctAnswer: "In addition, the Internet, and modern refrigeration techniques, are being used to keep alive the traditional skills of producing salmon",
        keywords: ["Are being used (正被用于)", "Keep alive (保护)"]
      },
      {
        label: "添加原因",
        chinese: "因为如今鲑鱼产品可从全球任何地方订购并配送",
        hint: "订购：ordered from；配送：delivered to。",
        correctAnswer: "In addition, the Internet, and modern refrigeration techniques, are being used to keep alive the traditional skills of producing salmon, because it can now be ordered from, and delivered to, anywhere in the world",
        keywords: ["Because (因为)", "Ordered (订购)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "尽管如此，计算机技能对幼儿带来的明显益处不容忽视。",
    finalEnglish: "In spite of this, the obvious benefits of computer skills for young children cannot be denied.",
    logicExplanation: "简单句。'尽管如此'是过渡词，主句说明计算机技能的益处不容忽视。",
    steps: [
      {
        label: "过渡词",
        chinese: "尽管如此",
        hint: "使用 In spite of this。",
        correctAnswer: "In spite of this",
        keywords: ["In spite of (尽管)"]
      },
      {
        label: "主句核心",
        chinese: "计算机技能对幼儿的明显益处不容忽视",
        hint: "益处：benefits；不容忽视：cannot be denied。",
        correctAnswer: "In spite of this, the obvious benefits of computer skills for young children cannot be denied",
        keywords: ["Benefits (益处)", "Cannot be denied (不容忽视)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "他们的成年世界将在技术领域持续变革，而互联网正是当今世界所有知识与信息的关键载体。",
    finalEnglish: "Their adult world will be changing constantly in terms of technology and the Internet is the key to all the knowledge and information available in the world today.",
    logicExplanation: "并列句。前半句说明成年世界的技术变革，后半句说明互联网是知识信息的关键载体。",
    steps: [
      {
        label: "前半句",
        chinese: "他们的成年世界将在技术领域持续变革",
        hint: "成年世界：adult world；持续变革：changing constantly。",
        correctAnswer: "Their adult world will be changing constantly in terms of technology",
        keywords: ["Adult world (成年世界)", "Changing constantly (持续变革)"]
      },
      {
        label: "后半句",
        chinese: "互联网是当今世界所有知识与信息的关键载体",
        hint: "关键：key to。",
        correctAnswer: "Their adult world will be changing constantly in terms of technology and the Internet is the key to all the knowledge and information available in the world today",
        keywords: ["Key to (关键)", "Knowledge (知识)"]
      }
    ]
  },
  {
    category: "网络科技类",
    fullChinese: "因此，儿童应尽早学会热情且自信地使用各类设备并且这些技能将伴随他们整个学习和职业生涯。",
    finalEnglish: "Therefore, it is important that children learn at an early age to use the equipment enthusiastically and with confidence as they will need these skills throughout their studies and working lives.",
    logicExplanation: "复合句。'因此'是过渡词，主句说明儿童应尽早学会使用设备，原因状语说明这些技能将伴随他们。",
    steps: [
      {
        label: "过渡与主句",
        chinese: "因此，儿童应尽早学会使用各类设备",
        hint: "因此：Therefore；尽早：at an early age。",
        correctAnswer: "Therefore, it is important that children learn at an early age to use the equipment",
        keywords: ["Therefore (因此)", "At an early age (尽早)"]
      },
      {
        label: "添加修饰",
        chinese: "热情且自信地使用",
        hint: "热情：enthusiastically；自信：with confidence。",
        correctAnswer: "Therefore, it is important that children learn at an early age to use the equipment enthusiastically and with confidence",
        keywords: ["Enthusiastically (热情地)", "Confidence (自信)"]
      },
      {
        label: "添加原因",
        chinese: "这些技能将伴随他们整个学习和职业生涯",
        hint: "职业生涯：working lives。",
        correctAnswer: "Therefore, it is important that children learn at an early age to use the equipment enthusiastically and with confidence as they will need these skills throughout their studies and working lives",
        keywords: ["Throughout (整个)", "Working lives (职业生涯)"]
      }
    ]
  },
  // ========== 健康饮食类 ==========
  {
    category: "健康饮食类",
    fullChinese: "政府对医疗保健和医学研究的投资在每个社会中都发挥着极其重要的作用。",
    finalEnglish: "Government investment in health care and medical research has an extremely important role to play in every society.",
    logicExplanation: "简单句。主语是'投资'，谓语是'发挥重要作用'。",
    steps: [
      {
        label: "主语核心",
        chinese: "政府的投资发挥着重要作用",
        hint: "投资：investment；发挥作用：has a role to play。",
        correctAnswer: "Government investment has an important role to play",
        keywords: ["Investment (投资)", "Role to play (作用)"]
      },
      {
        label: "添加修饰语",
        chinese: "政府对医疗保健和医学研究的投资",
        hint: "医疗保健：health care；医学研究：medical research。",
        correctAnswer: "Government investment in health care and medical research has an important role to play",
        keywords: ["Health care (医疗保健)", "Medical research (医学研究)"]
      },
      {
        label: "完善程度和范围",
        chinese: "在每个社会中发挥着极其重要的作用",
        hint: "极其重要：extremely important。",
        correctAnswer: "Government investment in health care and medical research has an extremely important role to play in every society",
        keywords: ["Extremely (极其)", "Every society (每个社会)"]
      }
    ]
  },
  {
    category: "健康饮食类",
    fullChinese: "例如，如果能为幼儿提供更多免费疫苗，婴儿和儿童死亡率就能显著降低，从而为国家发展培养出更健康的下一代人口。",
    finalEnglish: "For example, if more free vaccines are available to young children, infant and child mortality rates could be remarkably reduced, which contributes a healthier generation of population to the development of a country.",
    logicExplanation: "复合句。条件状语说明如果提供疫苗，主句说明死亡率降低。",
    steps: [
      {
        label: "引入例子与条件",
        chinese: "例如，如果能为幼儿提供更多免费疫苗",
        hint: "免费疫苗：free vaccines。",
        correctAnswer: "For example, if more free vaccines are available to young children",
        keywords: ["For example (例如)", "Free vaccines (免费疫苗)"]
      },
      {
        label: "主句结果",
        chinese: "婴儿和儿童死亡率就能显著降低",
        hint: "死亡率：mortality rates。",
        correctAnswer: "For example, if more free vaccines are available to young children, infant and child mortality rates could be remarkably reduced",
        keywords: ["Mortality rates (死亡率)", "Remarkably reduced (显著降低)"]
      },
      {
        label: "添加结果状语",
        chinese: "从而为国家发展培养出更健康的下一代人口",
        hint: "下一代：generation。",
        correctAnswer: "For example, if more free vaccines are available to young children, infant and child mortality rates could be remarkably reduced, which contributes a healthier generation of population to the development of a country",
        keywords: ["Contributes (贡献)", "Generation (下一代)"]
      }
    ]
  },
  {
    category: "健康饮食类",
    fullChinese: "此外，如果政府在经济上支持研发患者负担得起的新药，患者获得适当治疗并因此康复的可能性将大大增加。",
    finalEnglish: "In addition, if the government financially supports the research of new medicines that are more affordable to patients, there may be much higher possibilities for them to receive proper medical treatment and therefore be cured.",
    logicExplanation: "复合句。条件状语说明如果政府支持研发，主句说明患者康复的可能性增加。",
    steps: [
      {
        label: "过渡与条件",
        chinese: "此外，如果政府在经济上支持研发新药",
        hint: "经济上支持：financially supports。",
        correctAnswer: "In addition, if the government financially supports the research of new medicines",
        keywords: ["In addition (此外)", "Financially supports (经济上支持)"]
      },
      {
        label: "完善条件",
        chinese: "患者负担得起的新药",
        hint: "负担得起：affordable。",
        correctAnswer: "In addition, if the government financially supports the research of new medicines that are more affordable to patients",
        keywords: ["Affordable (负担得起)", "Patients (患者)"]
      },
      {
        label: "主句结果",
        chinese: "患者获得适当治疗并康复的可能性将大大增加",
        hint: "适当治疗：proper medical treatment。",
        correctAnswer: "In addition, if the government financially supports the research of new medicines that are more affordable to patients, there may be much higher possibilities for them to receive proper medical treatment and therefore be cured",
        keywords: ["Possibilities (可能性)", "Proper medical treatment (适当治疗)"]
      }
    ]
  },
  {
    category: "健康饮食类",
    fullChinese: "如果没有这样的投资，就很难以低成本为患者提供有效的医疗服务，因为以盈利为导向的企业不愿投入资金进行研发。",
    finalEnglish: "Without such investment, it would be difficult to provide patients with effective medical care at a low cost, as profit-driven companies are not willing to pour money into the research.",
    logicExplanation: "复合句。条件状语说明如果没有投资，主句说明难以提供服务。",
    steps: [
      {
        label: "条件状语",
        chinese: "如果没有这样的投资",
        hint: "如果没有：Without such...",
        correctAnswer: "Without such investment",
        keywords: ["Without (如果没有)", "Investment (投资)"]
      },
      {
        label: "主句",
        chinese: "就很难以低成本为患者提供有效的医疗服务",
        hint: "医疗服务：medical care。",
        correctAnswer: "Without such investment, it would be difficult to provide patients with effective medical care at a low cost",
        keywords: ["Difficult (困难)", "Medical care (医疗服务)"]
      },
      {
        label: "添加原因",
        chinese: "因为以盈利为导向的企业不愿投入资金进行研发",
        hint: "以盈利为导向：profit-driven。",
        correctAnswer: "Without such investment, it would be difficult to provide patients with effective medical care at a low cost, as profit-driven companies are not willing to pour money into the research",
        keywords: ["Profit-driven (以盈利为导向)", "Not willing to (不愿)"]
      }
    ]
  },
  // ========== 媒体商业类 ==========
  {
    category: "媒体商业类",
    fullChinese: "一方面，我必须承认，在媒体的帮助下，了解世界各地不同文化变得异常便捷。",
    finalEnglish: "On the one hand, I admit that getting acquainted with culture of different places across the world has become incredibly easy and convenient with the help of media.",
    logicExplanation: "复合句。'一方面'是过渡词，主句说明我承认，宾语从句说明了解文化变得便捷。",
    steps: [
      {
        label: "过渡与主句",
        chinese: "一方面，我必须承认",
        hint: "一方面：On the one hand。",
        correctAnswer: "On the one hand, I admit that",
        keywords: ["On the one hand (一方面)", "Admit (承认)"]
      },
      {
        label: "宾语从句核心",
        chinese: "了解世界各地不同文化变得便捷",
        hint: "了解：getting acquainted with。",
        correctAnswer: "On the one hand, I admit that getting acquainted with culture of different places across the world has become easy and convenient",
        keywords: ["Getting acquainted with (了解)", "Easy and convenient (便捷)"]
      },
      {
        label: "添加条件",
        chinese: "在媒体的帮助下变得异常便捷",
        hint: "在媒体的帮助下：with the help of media。",
        correctAnswer: "On the one hand, I admit that getting acquainted with culture of different places across the world has become incredibly easy and convenient with the help of media",
        keywords: ["Incredibly (异常)", "With the help of media (在媒体的帮助下)"]
      }
    ]
  },
  {
    category: "媒体商业类",
    fullChinese: "例如，有成千上万的书籍和杂志（如《孤独星球》）生动地描绘了数千英里外城市中人们的生活场景。",
    finalEnglish: "For example, there are thousands of books and magazines, such as Lonely Planet, vividly picturing how people live their daily lives in a city thousands of miles away from the reader.",
    logicExplanation: "复合句。'例如'是过渡词，主句说明有书籍杂志。",
    steps: [
      {
        label: "引入例子",
        chinese: "例如，有成千上万的书籍和杂志",
        hint: "成千上万：thousands of。",
        correctAnswer: "For example, there are thousands of books and magazines",
        keywords: ["For example (例如)", "Thousands of (成千上万)"]
      },
      {
        label: "添加具体例子",
        chinese: "如《孤独星球》",
        hint: "使用 such as 引举例子。",
        correctAnswer: "For example, there are thousands of books and magazines, such as Lonely Planet",
        keywords: ["Such as (如)"]
      },
      {
        label: "添加描绘内容",
        chinese: "生动地描绘了数千英里外城市中人们的生活场景",
        hint: "生动地：vividly；描绘：picturing。",
        correctAnswer: "For example, there are thousands of books and magazines, such as Lonely Planet, vividly picturing how people live their daily lives in a city thousands of miles away from the reader",
        keywords: ["Vividly (生动地)", "Picturing (描绘)"]
      }
    ]
  },
  {
    category: "媒体商业类",
    fullChinese: "关于当地饮食传统和节日庆典的信息几乎无需耗费时间和金钱即可获取。",
    finalEnglish: "Information about their food tradition and festival celebration can be accessed at almost no cost of time and money.",
    logicExplanation: "简单句。主语是'信息'，谓语说明可以低成本获取。",
    steps: [
      {
        label: "主语",
        chinese: "关于当地饮食传统和节日庆典的信息",
        hint: "饮食传统：food tradition。",
        correctAnswer: "Information about their food tradition and festival celebration",
        keywords: ["Information (信息)", "Food tradition (饮食传统)"]
      },
      {
        label: "谓语",
        chinese: "几乎无需耗费时间和金钱即可获取",
        hint: "获取：accessed。",
        correctAnswer: "Information about their food tradition and festival celebration can be accessed at almost no cost of time and money",
        keywords: ["Accessed (获取)", "At almost no cost (几乎无需耗费)"]
      }
    ]
  },
  {
    category: "媒体商业类",
    fullChinese: "同样地，观看电影也能让观众身临其境地体验与自身截然不同的生活方式。",
    finalEnglish: "In a similar way, watching movies brings viewers close to a lifestyle totally different from their own.",
    logicExplanation: "简单句。'同样地'是过渡词，主语是'观看电影'。",
    steps: [
      {
        label: "过渡与主语",
        chinese: "同样地，观看电影",
        hint: "同样地：In a similar way。",
        correctAnswer: "In a similar way, watching movies",
        keywords: ["In a similar way (同样地)", "Watching movies (观看电影)"]
      },
      {
        label: "谓语",
        chinese: "让观众身临其境地体验不同的生活方式",
        hint: "身临其境：brings...close to。",
        correctAnswer: "In a similar way, watching movies brings viewers close to a lifestyle totally different from their own",
        keywords: ["Brings close to (身临其境)", "Totally different (截然不同)"]
      }
    ]
  },
  {
    category: "媒体商业类",
    fullChinese: "以印度电影为例，它让人们深刻体会到歌唱和舞蹈对印度文化的重要性。",
    finalEnglish: "Indian movies, for example, let people know how important singing and dancing is to the Indians.",
    logicExplanation: "简单句。'以...为例'是插入语。",
    steps: [
      {
        label: "主语与插入语",
        chinese: "印度电影，以它为例",
        hint: "印度电影：Indian movies。",
        correctAnswer: "Indian movies, for example",
        keywords: ["Indian movies (印度电影)", "For example (以...为例)"]
      },
      {
        label: "谓语与宾语",
        chinese: "让人们深刻体会到歌唱和舞蹈对印度文化的重要性",
        hint: "重要性：how important...is。",
        correctAnswer: "Indian movies, for example, let people know how important singing and dancing is to the Indians",
        keywords: ["Let know (让...了解)", "Singing and dancing (歌唱和舞蹈)"]
      }
    ]
  }
];