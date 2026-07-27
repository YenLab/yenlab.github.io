export const fallbackMessage =
  "这个问题暂时没有明确的预设答案，欢迎通过电子邮件联系我：";

export const fallbackEmail = "kuangyuyen@ihcams.ac.cn";

export const prospectiveQa = [
  {
    id: "prior-experience",
    suggested: {
      zh: "没有编程或实验经验，也可以加入吗？",
      en: "Can I join without programming or lab experience?"
    },
    answers: {
      zh: "可以。不需要已有经验，可以在实验室中通过实践学习。",
      en: "Yes. Prior experience is not required; you can learn through hands-on practice in the lab."
    },
    source: "Prepared Q&A image, question 1",
    signatures: {
      zh: [
        [["没有经验", "没经验", "零基础"], ["加入", "参与", "科研"]],
        [["编程经验", "实验经验"], ["可以", "能否", "能不能"]]
      ],
      en: [
        [["no experience", "without experience", "beginner"], ["join", "participate", "research"]],
        [["programming experience", "coding experience", "lab experience", "laboratory experience"], ["can i", "could i", "eligible"]]
      ]
    }
  },
  {
    id: "work-balance",
    suggested: {
      zh: "课题组同时做实验和生物信息分析吗？",
      en: "Does the lab do both experiments and bioinformatics?"
    },
    answers: {
      zh: "实验室同时做实验和生物信息分析，两者需要彼此支持。具体比例取决于个人兴趣。图片中的回答者表示自己的工作约为 70% 分析、30% 实验；实验室也有成员 100% 从事分析或 100% 从事实验。",
      en: "The lab does both experimental and bioinformatics work, and the two areas support each other. The balance depends on individual interests. The respondent in the source describes their own work as approximately 70% analysis and 30% experiments; some lab members work entirely on analysis or entirely on experiments."
    },
    source: "Prepared Q&A image, question 2",
    signatures: {
      zh: [
        [["实验", "湿实验"], ["生信", "生物信息", "分析"]],
        [["实验"], ["分析"], ["比例", "平衡"]]
      ],
      en: [
        [["experiment", "wet lab"], ["bioinformatics", "computational", "analysis"]],
        [["experiment"], ["analysis"], ["ratio", "balance", "percentage"]]
      ]
    }
  },
  {
    id: "joining-prerequisites",
    suggested: {
      zh: "加入实验室前有什么要求？",
      en: "What are the prerequisites for joining the lab?"
    },
    answers: {
      zh: "加入前没有具体的知识、技能或英语成绩要求；除了想学的欲望，没有其他预先要求。但毕业要求需要通过英语六级。资料没有说明学校的正式招生或录取条件，如需确认请通过电子邮件联系。",
      en: "There are no specified prerequisite knowledge, skills, or English-language scores for joining; apart from the desire to learn, there are no other advance requirements. However, passing CET-6 is required for graduation. The approved information does not establish formal university admissions criteria, so please make contact by email if those criteria need to be confirmed."
    },
    source:
      "Prepared Q&A image, question 3; CET-6 graduation requirement confirmed by Kuangyu Yen on 2026-07-27",
    signatures: {
      zh: [
        [["加入", "申请", "进组"], ["要求", "条件", "准备"]],
        [["英语", "六级", "CET6", "CET-6"], ["要求", "成绩", "通过", "需要"]],
        [["知识", "技能"], ["要求", "需要", "准备"]]
      ],
      en: [
        [["join", "apply", "joining"], ["requirement", "prerequisite", "qualification"]],
        [["english", "cet6", "cet-6"], ["requirement", "score", "pass", "need"]],
        [["knowledge", "skill"], ["requirement", "need", "prepare"]]
      ]
    },
    fallbackIfContains: {
      zh: ["正式招生", "录取条件", "招生政策"],
      en: ["formal admission", "admission criteria", "admissions policy"]
    }
  },
  {
    id: "lab-culture",
    suggested: {
      zh: "实验室文化和日常交流方式是怎样的？",
      en: "What are the lab culture and mentoring style like?"
    },
    answers: {
      zh: "每个人有独立课题，成员之间互相帮助，但各不打扰。学生自己掌握日常工作和进度。导师办公室门开放，学生可以随时进来；导师每周询问课题进展，每年年底总结并制定未来计划，也欢迎学生直接通过电子邮件询问实验室情况。",
      en: "Each person has an independent project. Lab members help one another while respecting each other's work. Students manage their own daily work and progress. The supervisor's office is open and students may come in when needed. The supervisor asks about project progress each week, reviews the year and plans ahead at year-end, and welcomes direct email questions about the lab."
    },
    source: "Prepared Q&A image, question 4",
    signatures: {
      zh: [
        [["实验室文化", "课题组文化", "氛围"]],
        [["日常工作", "工作方式", "进度"], ["导师", "交流", "管理"]],
        [["导师", "老师"], ["交流", "沟通", "见面", "指导"]]
      ],
      en: [
        [["lab culture", "group culture", "atmosphere"]],
        [["daily work", "work style", "progress"], ["supervisor", "mentor", "management"]],
        [["supervisor", "mentor"], ["interaction", "communication", "meeting", "guidance"]]
      ]
    }
  },
  {
    id: "collaborations",
    suggested: {
      zh: "实验室有哪些国内外合作对象？",
      en: "Who are the lab's domestic and international collaborators?"
    },
    answers: {
      zh: "国内主要合作对象是血研所程涛院士、程辉教授和高瀛岱教授。图片列出的国外主要合作对象包括 Shaun Mahony（Penn State University）、Frank Pugh（Cornell University）和 Kiran Batta（The University of Manchester）。",
      en: "The main domestic collaborators are Academician Tao Cheng, Professor Hui Cheng, and Professor Yingdai Gao at the Institute of Hematology. The image lists Shaun Mahony at Penn State University, Frank Pugh at Cornell University, and Kiran Batta at the University of Manchester as major international collaborators."
    },
    source:
      "Prepared Q&A image, question 5; domestic collaborators confirmed by Kuangyu Yen on 2026-07-27",
    signatures: {
      zh: [
        [["合作", "合作对象", "合作者"]],
        [["国内合作"], ["谁", "对象", "有哪些"]],
        [["国外合作", "国际合作"], ["谁", "对象", "有哪些"]]
      ],
      en: [
        [["collaboration", "collaborator"]],
        [["domestic collaborator", "collaborators in china"]],
        [["international collaborator", "overseas collaborator"]]
      ]
    },
    fallbackIfContains: {
      zh: ["目前", "现在", "仍然", "最新"],
      en: ["current", "currently", "still active", "latest"]
    }
  },
  {
    id: "first-year-training",
    suggested: {
      zh: "加入后的第一年通常需要做什么？",
      en: "What is expected during the first year?"
    },
    answers: {
      zh: "硕士生和硕博连读学生第一学期参加组会，每周报告一篇文献。实验方向开始学习细胞培养；生物信息方向学习 R、Python 和 Linux 的基础知识与操作。第二学期前后需提交与课题相关的书面文献报告、阅读相关实验方案，并在通过实验方案知识考核后正式学习实验。实验方向需要能够把每项实验成功重复三次以上；生物信息方向需要能够重复分析结果。学生还需具备排查实验方案或软件包问题的能力，参加文献和实验汇报，并做一次介绍课题背景和未来框架的正式口头报告。",
      en: "Master's and combined master's-to-PhD students attend lab meetings and present one paper each week during the first semester. Wet-lab students begin learning cell culture; bioinformatics students learn basic R, Python, and Linux knowledge and operations. Around the second semester, students prepare a written literature report related to their project, read relevant protocols, and begin formal experimental training after passing a protocol-knowledge assessment. Wet-lab students are expected to reproduce each experiment successfully at least three times; bioinformatics students are expected to reproduce analytical results. Students also develop the ability to troubleshoot protocols or packages, participate in literature and experimental presentations, and give a formal oral presentation on the project background and future framework."
    },
    source: "New Student Orientation PDF, file pages 3-4 (printed pages 1-2)",
    signatures: {
      zh: [
        [["第一年", "硕一", "入组后"], ["要求", "做什么", "安排", "训练"]],
        [["组会"], ["每周", "文献", "汇报", "要求"]]
      ],
      en: [
        [["first year", "year one", "after joining"], ["expect", "requirement", "training", "do"]],
        [["lab meeting", "group meeting"], ["weekly", "paper", "presentation", "requirement"]]
      ]
    }
  },
  {
    id: "masters-milestones",
    suggested: {
      zh: "硕士阶段的主要进度要求是什么？",
      en: "What are the main milestones for master's students?"
    },
    answers: {
      zh: "资料列出的主要节点是：硕一完成文献、基础技能、实验方案考核和课题报告训练；硕二第一学期在暑假后提交第一年论文，开展相关实验或分析，设计能够重复结果的分析流程，参加汇报和学校中期考核；硕二第二学期继续实验和汇报，并在八月底完成文章初稿；硕三第一学期继续实验和汇报，并在十二月中旬前提交文章；硕三第二学期继续实验和汇报，最后提交中文硕士论文和已接收的英文文章。资料没有确认这些时间点是否仍是现行要求，需要确认当前规定时请通过电子邮件联系。",
      en: "The document lists these main milestones: complete literature, foundational-skills, protocol-assessment, and project-presentation training in the first year; after the summer in the second year, deliver the first-year paper, conduct relevant experiments or analysis, design a reproducible pipeline, participate in reports, and complete the university midterm assessment; continue experiments and reports and complete a manuscript draft by the end of August; continue experiments and reports in the third year and submit the paper by mid-December; then complete a Chinese master's thesis and an accepted English-language paper. The source does not confirm whether these dates remain current, so please use email to confirm current requirements."
    },
    source: "New Student Orientation PDF, file page 3 (printed page 1)",
    signatures: {
      zh: [
        [["硕士", "硕一", "硕二", "硕三"], ["进度", "要求", "节点", "安排", "毕业"]],
        [["硕士"], ["论文", "文章"], ["时间", "什么时候", "提交"]]
      ],
      en: [
        [["master student", "master's", "masters"], ["milestone", "progress", "requirement", "timeline", "graduate"]],
        [["master's", "masters"], ["paper", "thesis", "manuscript"], ["when", "submit", "deadline"]]
      ]
    },
    fallbackIfContains: {
      zh: ["现行规定", "最新规定", "今年要求"],
      en: ["current rule", "latest requirement", "this year's requirement"]
    }
  },
  {
    id: "doctoral-milestones",
    suggested: {
      zh: "硕博连读或博士阶段有哪些主要要求？",
      en: "What are the main requirements for doctoral training?"
    },
    answers: {
      zh: "资料将硕博连读要求也标注为博士要求。前两年基本沿用硕士前两年的训练安排。博一第一学期包括：暑假后以硕士论文模式撰写课题书面报告、开展课题实验、参加文献和实验汇报，并参加等同于开题报告的学校中期考核；第二学期继续实验和汇报。博士最后阶段需继续实验和汇报、提前一年半完成文章初稿、提交或接收至少一篇论文，并完成中文博士论文。资料没有确认这些要求是否仍为现行规定，需要确认时请通过电子邮件联系。",
      en: "The document labels the combined master's-to-PhD requirements as also applying to doctoral training. The first two years broadly follow the master's training schedule. In the first semester of the first PhD year, students prepare a written project report in master's-thesis format after the summer, conduct project experiments, participate in literature and experiment reports, and complete a university midterm assessment described as equivalent to the thesis proposal. Experiments and reports continue in the second semester. The final doctoral stage includes continued experiments and reporting, completing a manuscript draft one and a half years in advance, submitting or having at least one paper accepted, and completing a Chinese doctoral thesis. The source does not confirm that these remain the current rules, so please use email when current requirements need confirmation."
    },
    source: "New Student Orientation PDF, file pages 3-4 (printed pages 1-2)",
    signatures: {
      zh: [
        [["博士", "硕博连读"], ["要求", "进度", "节点", "安排", "毕业"]],
        [["博士"], ["论文", "文章"], ["提交", "接收", "毕业"]]
      ],
      en: [
        [["phd", "doctoral", "master-to-phd", "combined master's"], ["requirement", "milestone", "progress", "timeline", "graduate"]],
        [["phd", "doctoral"], ["paper", "thesis", "manuscript"], ["submit", "accept", "graduate"]]
      ]
    },
    fallbackIfContains: {
      zh: ["现行规定", "最新规定", "今年要求"],
      en: ["current rule", "latest requirement", "this year's requirement"]
    }
  },
  {
    id: "software",
    suggested: {
      zh: "需要学习哪些软件或计算工具？",
      en: "What software or computational tools should students learn?"
    },
    answers: {
      zh: "文书和科研辅助工具包括 Office（Word、PowerPoint、Excel）、EndNote 或 Zotero、Typora、Illustrator、Photoshop、GraphPad Prism、MarginNote 3 或其他思维导图软件，以及 DeepSeek 或 Kimi。分析工具包括 Linux、R，以及 Python、Java、Perl 中任选一种。这是入组后学习和使用的工具清单，不代表加入前必须全部掌握。",
      en: "Document, research, and AI-support tools include Microsoft Office (Word, PowerPoint, and Excel), EndNote or Zotero, Typora, Illustrator, Photoshop, GraphPad Prism, MarginNote 3 or another mind-mapping application, and DeepSeek or Kimi. Analysis tools include Linux, R, and a choice among Python, Java, or Perl. This is a list of tools to learn and use after joining, not a requirement to master all of them in advance."
    },
    source:
      "New Student Orientation PDF, file page 4 (printed page 2); Zotero and DeepSeek/Kimi additions confirmed by Kuangyu Yen on 2026-07-27",
    signatures: {
      zh: [
        [["软件", "工具"], ["学习", "需要", "会什么", "推荐"]],
        [["EndNote", "Zotero", "DeepSeek", "Kimi", "R", "Python"], ["需要", "学习", "使用", "工具"]]
      ],
      en: [
        [["software", "tool"], ["learn", "need", "recommended", "use"]],
        [["endnote", "zotero", "deepseek", "kimi", "python"], ["need", "learn", "use", "tool"]]
      ]
    }
  },
  {
    id: "paper-reading",
    suggested: {
      zh: "应该怎样阅读科研论文？",
      en: "How should I read a research paper?"
    },
    answers: {
      zh: "资料建议最多分三遍阅读。第一遍用约 5–10 分钟阅读标题、摘要、引言、各级标题、结论和参考文献，并判断论文的类别、背景关联、正确性、主要贡献和清晰度。第二遍更仔细地阅读，记录要点，检查图表、坐标标注、误差线和重要参考文献，完成后应能概括论文的主要内容和支持证据。第三遍尝试按照作者的假设重新实现论文，逐项质疑假设，并找出创新、薄弱点、缺失引用以及实验或分析方法的潜在问题。",
      en: "The guide recommends up to three passes. Spend about 5–10 minutes on the first pass, reading the title, abstract, introduction, headings, conclusion, and references, then assess the paper's category, context, correctness, contributions, and clarity. On the second pass, read more carefully, take notes, and examine figures, axis labels, error bars, and important references; you should then be able to summarize the main argument and supporting evidence. On the third pass, try to reimplement the work using the authors' assumptions, challenge those assumptions, and identify innovations, weaknesses, missing citations, and possible experimental or analytical problems."
    },
    source: "New Student Orientation PDF, file pages 5-6 (embedded article pages 3-4)",
    signatures: {
      zh: [
        [["阅读", "读"], ["论文", "文献"], ["方法", "怎么", "如何"]],
        [["三遍", "三次阅读"], ["论文", "文献"]]
      ],
      en: [
        [["read", "reading"], ["paper", "literature", "article"], ["how", "method", "approach"]],
        [["three pass", "three-pass"], ["paper", "article"]]
      ]
    }
  }
];
