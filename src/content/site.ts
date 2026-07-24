export type Locale = "en" | "zh";

export type PageKey =
  | "home"
  | "research"
  | "publications"
  | "people"
  | "resources"
  | "join";

export const officialProfile =
  "https://www.chinablood.com.cn/zyb/science/team/8820.html";

export const locales: Record<Locale, { label: string; htmlLang: string }> = {
  en: { label: "EN", htmlLang: "en" },
  zh: { label: "中文", htmlLang: "zh-CN" }
};

export const navigation: Record<Locale, Array<{ key: PageKey; label: string; href: string }>> = {
  en: [
    { key: "home", label: "Home", href: "/en/" },
    { key: "research", label: "Research", href: "/en/research/" },
    { key: "publications", label: "Publications", href: "/en/publications/" },
    { key: "people", label: "People", href: "/en/people/" },
    { key: "resources", label: "Resources", href: "/en/resources/" },
    { key: "join", label: "Join Us", href: "/en/join/" }
  ],
  zh: [
    { key: "home", label: "首页", href: "/zh/" },
    { key: "research", label: "研究方向", href: "/zh/research/" },
    { key: "publications", label: "论文成果", href: "/zh/publications/" },
    { key: "people", label: "团队成员", href: "/zh/people/" },
    { key: "resources", label: "资源方法", href: "/zh/resources/" },
    { key: "join", label: "加入我们", href: "/zh/join/" }
  ]
};

export const siteCopy = {
  en: {
    title: "Yen Lab",
    labName: "Yen Lab",
    subtitle: "Chromatin, transcription regulation, and hematopoietic cell fate",
    affiliation:
      "State Key Laboratory of Experimental Hematology, Chinese Academy of Medical Sciences & Peking Union Medical College",
    location: "Tianjin, China",
    officialLabel: "Official IHCAMS profile",
    contactLabel: "Contact",
    email: "kuangyuyen@ihcams.ac.cn",
    altEmail: "kuangyuyen@gmail.com",
    phone: "+86-22-23909458",
    languageLabel: "中文",
    languageHref: "/zh/",
    footerNote:
      "This independent lab website complements the official institute profile and is maintained for research communication.",
    home: {
      eyebrow: "Research group website",
      mission:
        "We study how chromatin regulates transcription across cell-state transitions, with a focus on hematopoietic differentiation and disease-relevant fate decisions.",
      lead:
        "The laboratory combines genomics, in-house computational methods, in vitro differentiation systems, and biochemical reconstitution to understand how cells cross regulatory tipping points.",
      graphicPlaceholder: "Graphic summary reserved for a future lab image.",
      graphicAlt: "Yen Lab research interest overview — chromatin, transcription regulation, and hematopoietic cell fate",
      ctas: [
        { label: "Explore research", href: "/en/research/" },
        { label: "View publications", href: "/en/publications/" }
      ],
      highlights: [
        {
          value: "3",
          label: "research directions",
          detail: "chromatin, fate transitions, leukemia biology"
        },
        {
          value: "2024-2027",
          label: "active NSFC project",
          detail: "structural footprinting and transcription pausing"
        },
        {
          value: "IHCAMS",
          label: "official affiliation",
          detail: "State Key Laboratory of Experimental Hematology"
        }
      ],
      researchPreviewTitle: "What we focus on",
      researchPreview: [
        "How nucleosomes and chromatin remodelers shape transcriptional output.",
        "How endothelial cells transition toward hematopoietic progenitor states.",
        "How chromatin context separates normal and leukemic cell-fate decisions."
      ]
    }
  },
  zh: {
    title: "颜光玗课题组",
    labName: "颜光玗课题组",
    subtitle: "染色质、转录调控与造血细胞命运",
    affiliation: "中国医学科学院血液病医院（中国医学科学院血液学研究所）血液与健康全国重点实验室",
    location: "中国天津",
    officialLabel: "官方主页",
    contactLabel: "联系方式",
    email: "kuangyuyen@ihcams.ac.cn",
    altEmail: "kuangyuyen@gmail.com",
    phone: "+86-22-23909458",
    languageLabel: "EN",
    languageHref: "/en/",
    footerNote: "本站用于课题组科研交流，官方机构信息以中国医学科学院血液病医院（中国医学科学院血液学研究所）页面为准。",
    home: {
      eyebrow: "课题组网站",
      mission: "我们研究染色质如何在细胞命运转变过程中调控转录，重点关注造血分化与疾病相关的命运选择。",
      lead:
        "课题组结合基因组学、自主开发的生物信息学方法、体外分化系统和生化重构，解析细胞跨越调控临界点的分子机制。",
      graphicPlaceholder: "此处预留给未来上传的课题组图形摘要。",
      graphicAlt: "颜光玗课题组研究方向概览——染色质、转录调控与造血细胞命运",
      ctas: [
        { label: "查看研究方向", href: "/zh/research/" },
        { label: "查看论文成果", href: "/zh/publications/" }
      ],
      highlights: [
        {
          value: "3",
          label: "主要研究方向",
          detail: "染色质、命运转变、白血病生物学"
        },
        {
          value: "2024-2027",
          label: "在研基金项目",
          detail: "结构足迹算法与转录暂停"
        },
        {
          value: "IHCAMS",
          label: "正式依托单位",
          detail: "血液与健康全国重点实验室"
        }
      ],
      researchPreviewTitle: "我们关注的问题",
      researchPreview: [
        "核小体和染色质重塑因子如何影响转录输出。",
        "内皮细胞如何向造血祖细胞状态转变。",
        "染色质环境如何区分正常与白血病细胞命运选择。"
      ]
    }
  }
} satisfies Record<
  Locale,
  {
    title: string;
    labName: string;
    subtitle: string;
    affiliation: string;
    location: string;
    officialLabel: string;
    contactLabel: string;
    email: string;
    altEmail: string;
    phone: string;
    languageLabel: string;
    languageHref: string;
    footerNote: string;
    home: {
      eyebrow: string;
      mission: string;
      lead: string;
      graphicPlaceholder: string;
      graphicAlt: string;
      ctas: Array<{ label: string; href: string }>;
      highlights: Array<{ value: string; label: string; detail: string }>;
      researchPreviewTitle: string;
      researchPreview: string[];
    };
  }
>;

export const pages: Record<Exclude<PageKey, "home">, Record<Locale, PageContent>> = {
  research: {
    en: {
      title: "Research",
      intro:
        "We study how chromatin and transcriptional regulation govern cell fate transitions in hematopoietic development and leukemia, using single-cell multiomics, experimental perturbation, and computational modeling to identify the states where normal and malignant fates diverge.",
      sections: [
        {
          heading: "Endothelial-to-hematopoietic transition",
          body:
            "We study how endothelial cells acquire hematopoietic fate, why in vitro differentiation systems only partially reproduce in vivo hematopoietic stem cell emergence, and which regulatory programs are conserved or divergent across systems and species.",
          tags: ["EHT", "hematopoietic emergence", "in vitro differentiation"]
        },
        {
          heading: "Cell-fate tipping points",
          body:
            "Using EHT as a central biological model, we ask how transient, unstable, or pre-committed cell states can be detected before fate becomes fixed. This direction connects dynamic single-cell data, computational modeling, and experimental validation.",
          tags: ["tipping points", "cell-fate transition", "single-cell genomics"]
        },
        {
          heading: "Chromatin-dependent transcription factor targeting",
          body:
            "We investigate how pre-existing chromatin landscapes influence where transcription factors bind and why similar perturbations can produce different fate outcomes. The goal is to understand how chromatin context shapes regulatory competence in normal and disease-relevant hematopoietic cells.",
          tags: ["chromatin state", "transcription factors", "regulatory competence"]
        }
      ]
    },
    zh: {
      title: "研究方向",
      intro:
        "我们研究染色质和转录调控如何控制造血发育与白血病中的细胞命运转变，并结合单细胞多组学、实验扰动和计算建模，识别正常与恶性命运发生分化的关键细胞状态。",
      sections: [
        {
          heading: "内皮向造血转变",
          body:
            "我们研究内皮细胞如何获得造血命运，为什么体外分化系统只能部分重现体内造血干细胞的产生过程，以及不同系统和物种之间哪些调控程序是保守或特异的。",
          tags: ["EHT", "造血发生", "体外分化"]
        },
        {
          heading: "细胞命运临界点",
          body:
            "以内皮向造血转变作为核心生物学模型，我们关注细胞命运固定之前那些短暂、不稳定或预承诺的状态如何被识别。该方向结合动态单细胞数据、计算建模和实验验证。",
          tags: ["临界点", "细胞命运转变", "单细胞基因组学"]
        },
        {
          heading: "染色质依赖的转录因子靶向",
          body:
            "我们研究既有染色质状态如何影响转录因子的结合位置，以及为什么相似的扰动会产生不同的命运结果。该方向旨在解析染色质环境如何塑造正常和疾病相关造血细胞的调控能力。",
          tags: ["染色质状态", "转录因子", "调控能力"]
        }
      ]
    }
  },
  publications: {
    en: {
      title: "Publications",
      intro: "",
      sections: [
        {
          heading: "Latest publications (2021-2026)",
          list: [
            "Liu Yang*, Shan Liu*, Ting Lu*, Shaokang Mo, Bin Qi, Kuangyu Yen. (2026) chromIDEAS reveals epigenetic dynamics via multi-dimensional clustering of chromatin states. Nucleic Acids Research. DOI: 10.1093/nar/gkag176",
            "Shaokang Mo, Kuangyu Yen. (2025) Developmental origins of the heterogeneous hematopoiesis. American Journal of Hematology. DOI: 10.1002/ajh.70050",
            "Shaokang Mo*, Kengyuan Qu*, Jun Shen#, Kuangyu Yen#. (2025) Protocol for differentiating hematopoietic progenitor cells from human pluripotent stem cells in chemically defined monolayer culture. STAR Protoc. DOI: 10.1016/j.xpro.2024.103545",
            "Kengyuan Qu*, Shaokang Mo*, Junfeng Huang*#, Shan Liu, Shuo Zhang, Jun Shen#, Kuangyu Yen#. (2024) SPI1-KLF1/LYL1 Axis regulates Lineage Commitment during Endothelial-to-Hematopoietic Transition from Human Pluripotent Stem Cells. iScience. DOI: 10.1016/j.isci.2024.110409",
            "Jianyu Yang, Kuangyu Yen#, Shaun Mahony#. (2024) Size-based expectation maximization for characterizing nucleosome positions and subtypes. Genome Research. DOI: 10.1101/gr.279138.124",
            "Shaokang Mo*, Kengyuan Qu*, Junfeng Huang*#, Qiwei Li, Wenqing Zhang, Kuangyu Yen#. (2023) Cross-species transcriptomics reveals bifurcation point during the arterial-to-hemogenic transition. Commun Biol. 6(1):827",
            "Houyu Zhang*, Ting Lu*, Shan Liu, Jianyu Yang, Guohuan Sun, Tao Cheng, Jin Xu, Fangyao Chen#, Kuangyu Yen#. (2021) Comprehensive understanding of Tn5 insertion preference recovers expansive transcription regulatory lexicon. NAR Genomics and Bioinformatics. DOI: 10.1093/nargab/lqab094",
            "Shan Liu*, Jianyu Yang*, Guohuan Sun, Yawen Zhang, Cong Cheng, Jin Xu, Kuangyu Yen#, Ting Lu#. (2021) RUNX1 upregulates CENPE to promote leukemic cell proliferation. Front Mol Biosci. 8:692880",
            "Liu Yang#, Houyu Zhang, Xue Yang, Ting Lu, Shihui Ma, Hui Cheng, Kuangyu Yen# and Tao Cheng#. (2021) Prognostic Prediction of Cytogenetically Normal Acute Myeloid Leukemia Based on a Gene Expression Model. Front Oncol. 11:659201",
            "Xiao Fang, Song'en Xu, Yiyue Zhang, Jin Xu, Zhibin Huang, Wei Liu, Shunqing Wang, Kuangyu Yen#, Wenqing Zhang#. (2021) Asxl1 C-terminal mutation perturbs neutrophil differentiation in zebrafish. Leukemia. 35:2299-2310"
          ]
        },
        {
          heading: "Full publication list",
          list: [
            "Liu Yang*, Shan Liu*, Ting Lu*, Shaokang Mo, Bin Qi, Kuangyu Yen. (2026) chromIDEAS reveals epigenetic dynamics via multi-dimensional clustering of chromatin states. Nucleic Acids Research. DOI: 10.1093/nar/gkag176",
            "Shaokang Mo, Kuangyu Yen. (2025) Developmental origins of the heterogeneous hematopoiesis. American Journal of Hematology. DOI: 10.1002/ajh.70050",
            "Shaokang Mo*, Kengyuan Qu*, Jun Shen#, Kuangyu Yen#. (2025) Protocol for differentiating hematopoietic progenitor cells from human pluripotent stem cells in chemically defined monolayer culture. STAR Protoc. DOI: 10.1016/j.xpro.2024.103545",
            "Kengyuan Qu*, Shaokang Mo*, Junfeng Huang*#, Shan Liu, Shuo Zhang, Jun Shen#, Kuangyu Yen#. (2024) SPI1-KLF1/LYL1 Axis regulates Lineage Commitment during Endothelial-to-Hematopoietic Transition from Human Pluripotent Stem Cells. iScience. DOI: 10.1016/j.isci.2024.110409",
            "Jianyu Yang, Kuangyu Yen#, Shaun Mahony#. (2024) Size-based expectation maximization for characterizing nucleosome positions and subtypes. Genome Research. DOI: 10.1101/gr.279138.124",
            "Shaokang Mo*, Kengyuan Qu*, Junfeng Huang*#, Qiwei Li, Wenqing Zhang, Kuangyu Yen#. (2023) Cross-species transcriptomics reveals bifurcation point during the arterial-to-hemogenic transition. Commun Biol. 6(1):827",
            "Houyu Zhang*, Ting Lu*, Shan Liu, Jianyu Yang, Guohuan Sun, Tao Cheng, Jin Xu, Fangyao Chen#, Kuangyu Yen#. (2021) Comprehensive understanding of Tn5 insertion preference recovers expansive transcription regulatory lexicon. NAR Genomics and Bioinformatics. DOI: 10.1093/nargab/lqab094",
            "Shan Liu*, Jianyu Yang*, Guohuan Sun, Yawen Zhang, Cong Cheng, Jin Xu, Kuangyu Yen#, Ting Lu#. (2021) RUNX1 upregulates CENPE to promote leukemic cell proliferation. Front Mol Biosci. 8:692880",
            "Liu Yang#, Houyu Zhang, Xue Yang, Ting Lu, Shihui Ma, Hui Cheng, Kuangyu Yen# and Tao Cheng#. (2021) Prognostic Prediction of Cytogenetically Normal Acute Myeloid Leukemia Based on a Gene Expression Model. Front Oncol. 11:659201",
            "Xiao Fang, Song'en Xu, Yiyue Zhang, Jin Xu, Zhibin Huang, Wei Liu, Shunqing Wang, Kuangyu Yen#, Wenqing Zhang#. (2021) Asxl1 C-terminal mutation perturbs neutrophil differentiation in zebrafish. Leukemia. 35:2299-2310",
            "Wang, Yajie*; Lu, Ting*; Sun, Guohuan; Zheng, Yawei; Yang, Shangda; Zhang, Hongyan; Hao, Sha; Liu, Yanfeng; Ma, Shihui; Zhang, Houyu; Ru, Yongxin; Gao, Shaorong; Yen, Kuangyu#; Cheng, Hui#; Cheng, Tao#. (2019) Targeting of apoptosis gene loci by reprogramming factors leads to selective eradication of leukemia cells. Nature Communications. 10(1):5594",
            "Van Oss SB, Shirra MK, Bataille AR, Wier AD, Yen K, Vinayachandran V, Byeon IL, Cucinotta CE, Heroux A, Jeon J, Kim J, VanDemark AP, Pugh BF and Arndt KM. (2016) The Histone Modification Domain of Paf1 Complex Subunit Rtf1 Directly Stimulates H2B Ubiquitylation through an Interaction with Rad6. Mol. Cell. 64(4):815-825",
            "de Dieuleveult, M*, Yen K*#, Hmitou I*, Depaux A*, Boussouar F, Dargham DB, Jounier S, Humbertclaude H, Ribierre F, Baulard C, Farrell NP, Park B, Keime C, Carriere L, Merlivet S, Gut M, Gut I, Werner M, Deleuze JF, Olaso R, Aude JC, Chantalat S, Pugh BF and Gerard M. (2016) Genome-wide nucleosome specificity and function of chromatin remodellers in ES cells. Nature. 530(7588):113-116",
            "Yao W, King DA, Beckwith SL, Gowans GJ, Yen K, Zhou C. and Morrison AJ. (2016) The INO80 Complex Requires the Arp5-Ies6 Subcomplex for Chromatin-Remodeling and Metabolic Regulation. Mol Cell Biol. 36(6):979-91",
            "Aguilar-Gurrieri C, Larabi A, Vinayachandran V, Patel NA, Yen K, Reja R, Ebong IO, Schoehn G, Robinson CV, Pugh BF and Panne D. (2016) Structural evidence for Nap1-dependent H2A-H2B deposition and nucleosome assembly. EMBO J. 35(13):1465-82",
            "Yen K, Vinayachandran V and Pugh BF. (2013) Genome-wide structural integration of SWR-C and INO80 chromatin remodelers at +1 nucleosomes. Cell. 154(6):1246-56",
            "Yen K, Vinayachandran V, Batta K, Koerber RT and Pugh BF. (2012) Genome-wide nucleosome specificity and directionality of chromatin remodelers. Cell. 149(7):1461-73",
            "Lee J-S, Garrett AS, Yen K, Takahashi Y-H, Hu D, Jackson J, Seidel C, Pugh BF and Ali Shilatifard. (2012) Co-dependency of H2B monoubiquitination and nucleosome re-assembly on Chd1. Genes Dev. 26(9):914-9",
            "Batta K, Zhang Z, Yen K, Goffman DB and Pugh BF. (2011) Genome-wide function of H2B ubiquitylation in promoter and genic regions. Genes Dev. 25(21):2254-65",
            "Young ET, Yen K, Dombek KM, Law GL, Chang E and Arms E. (2009) Snf1-independent, glucose-resistant transcription of Adr1-dependent genes in a mediator mutant of Saccharomyces cerevisiae. Mol Microbiol. 74(2):364-83",
            "Wishart JA, Osborn M, Gent ME, Yen K, Vujovic Z, Gitsham P, Zhang N, Ross Miller J and Oliver SG. (2006) The relative merits of the tetO2 and tetO7 promoter systems for the functional analysis of heterologous genes in yeast and a compilation of essential yeast genes with tetO2 promoter substitutions. Yeast. 23(4):325-31",
            "Yen K, Gitsham P, Wishart J, Oliver SG and Zhang N. (2003) An improved tetO promoter replacement system for regulating the expression of yeast genes. Yeast. 20(15):1255-62",
            "Zhang N, Osborn M, Gitsham P, Yen K, Miller JR and Oliver SG. (2003) Using yeast to place human genes in functional categories. Gene. 303:121-129"
          ]
        }
      ]
    },
    zh: {
      title: "论文成果",
      intro: "",
      sections: [
        {
          heading: "近五年论文（2021-2026）",
          list: [
            "Liu Yang*, Shan Liu*, Ting Lu*, Shaokang Mo, Bin Qi, Kuangyu Yen. (2026) chromIDEAS reveals epigenetic dynamics via multi-dimensional clustering of chromatin states. Nucleic Acids Research. DOI: 10.1093/nar/gkag176",
            "Shaokang Mo, Kuangyu Yen. (2025) Developmental origins of the heterogeneous hematopoiesis. American Journal of Hematology. DOI: 10.1002/ajh.70050",
            "Shaokang Mo*, Kengyuan Qu*, Jun Shen#, Kuangyu Yen#. (2025) Protocol for differentiating hematopoietic progenitor cells from human pluripotent stem cells in chemically defined monolayer culture. STAR Protoc. DOI: 10.1016/j.xpro.2024.103545",
            "Kengyuan Qu*, Shaokang Mo*, Junfeng Huang*#, Shan Liu, Shuo Zhang, Jun Shen#, Kuangyu Yen#. (2024) SPI1-KLF1/LYL1 Axis regulates Lineage Commitment during Endothelial-to-Hematopoietic Transition from Human Pluripotent Stem Cells. iScience. DOI: 10.1016/j.isci.2024.110409",
            "Jianyu Yang, Kuangyu Yen#, Shaun Mahony#. (2024) Size-based expectation maximization for characterizing nucleosome positions and subtypes. Genome Research. DOI: 10.1101/gr.279138.124",
            "Shaokang Mo*, Kengyuan Qu*, Junfeng Huang*#, Qiwei Li, Wenqing Zhang, Kuangyu Yen#. (2023) Cross-species transcriptomics reveals bifurcation point during the arterial-to-hemogenic transition. Commun Biol. 6(1):827",
            "Houyu Zhang*, Ting Lu*, Shan Liu, Jianyu Yang, Guohuan Sun, Tao Cheng, Jin Xu, Fangyao Chen#, Kuangyu Yen#. (2021) Comprehensive understanding of Tn5 insertion preference recovers expansive transcription regulatory lexicon. NAR Genomics and Bioinformatics. DOI: 10.1093/nargab/lqab094",
            "Shan Liu*, Jianyu Yang*, Guohuan Sun, Yawen Zhang, Cong Cheng, Jin Xu, Kuangyu Yen#, Ting Lu#. (2021) RUNX1 upregulates CENPE to promote leukemic cell proliferation. Front Mol Biosci. 8:692880",
            "Liu Yang#, Houyu Zhang, Xue Yang, Ting Lu, Shihui Ma, Hui Cheng, Kuangyu Yen# and Tao Cheng#. (2021) Prognostic Prediction of Cytogenetically Normal Acute Myeloid Leukemia Based on a Gene Expression Model. Front Oncol. 11:659201",
            "Xiao Fang, Song'en Xu, Yiyue Zhang, Jin Xu, Zhibin Huang, Wei Liu, Shunqing Wang, Kuangyu Yen#, Wenqing Zhang#. (2021) Asxl1 C-terminal mutation perturbs neutrophil differentiation in zebrafish. Leukemia. 35:2299-2310"
          ]
        },
        {
          heading: "完整论文列表",
          list: [
            "Liu Yang*, Shan Liu*, Ting Lu*, Shaokang Mo, Bin Qi, Kuangyu Yen. (2026) chromIDEAS reveals epigenetic dynamics via multi-dimensional clustering of chromatin states. Nucleic Acids Research. DOI: 10.1093/nar/gkag176",
            "Shaokang Mo, Kuangyu Yen. (2025) Developmental origins of the heterogeneous hematopoiesis. American Journal of Hematology. DOI: 10.1002/ajh.70050",
            "Shaokang Mo*, Kengyuan Qu*, Jun Shen#, Kuangyu Yen#. (2025) Protocol for differentiating hematopoietic progenitor cells from human pluripotent stem cells in chemically defined monolayer culture. STAR Protoc. DOI: 10.1016/j.xpro.2024.103545",
            "Kengyuan Qu*, Shaokang Mo*, Junfeng Huang*#, Shan Liu, Shuo Zhang, Jun Shen#, Kuangyu Yen#. (2024) SPI1-KLF1/LYL1 Axis regulates Lineage Commitment during Endothelial-to-Hematopoietic Transition from Human Pluripotent Stem Cells. iScience. DOI: 10.1016/j.isci.2024.110409",
            "Jianyu Yang, Kuangyu Yen#, Shaun Mahony#. (2024) Size-based expectation maximization for characterizing nucleosome positions and subtypes. Genome Research. DOI: 10.1101/gr.279138.124",
            "Shaokang Mo*, Kengyuan Qu*, Junfeng Huang*#, Qiwei Li, Wenqing Zhang, Kuangyu Yen#. (2023) Cross-species transcriptomics reveals bifurcation point during the arterial-to-hemogenic transition. Commun Biol. 6(1):827",
            "Houyu Zhang*, Ting Lu*, Shan Liu, Jianyu Yang, Guohuan Sun, Tao Cheng, Jin Xu, Fangyao Chen#, Kuangyu Yen#. (2021) Comprehensive understanding of Tn5 insertion preference recovers expansive transcription regulatory lexicon. NAR Genomics and Bioinformatics. DOI: 10.1093/nargab/lqab094",
            "Shan Liu*, Jianyu Yang*, Guohuan Sun, Yawen Zhang, Cong Cheng, Jin Xu, Kuangyu Yen#, Ting Lu#. (2021) RUNX1 upregulates CENPE to promote leukemic cell proliferation. Front Mol Biosci. 8:692880",
            "Liu Yang#, Houyu Zhang, Xue Yang, Ting Lu, Shihui Ma, Hui Cheng, Kuangyu Yen# and Tao Cheng#. (2021) Prognostic Prediction of Cytogenetically Normal Acute Myeloid Leukemia Based on a Gene Expression Model. Front Oncol. 11:659201",
            "Xiao Fang, Song'en Xu, Yiyue Zhang, Jin Xu, Zhibin Huang, Wei Liu, Shunqing Wang, Kuangyu Yen#, Wenqing Zhang#. (2021) Asxl1 C-terminal mutation perturbs neutrophil differentiation in zebrafish. Leukemia. 35:2299-2310",
            "Wang, Yajie*; Lu, Ting*; Sun, Guohuan; Zheng, Yawei; Yang, Shangda; Zhang, Hongyan; Hao, Sha; Liu, Yanfeng; Ma, Shihui; Zhang, Houyu; Ru, Yongxin; Gao, Shaorong; Yen, Kuangyu#; Cheng, Hui#; Cheng, Tao#. (2019) Targeting of apoptosis gene loci by reprogramming factors leads to selective eradication of leukemia cells. Nature Communications. 10(1):5594",
            "Van Oss SB, Shirra MK, Bataille AR, Wier AD, Yen K, Vinayachandran V, Byeon IL, Cucinotta CE, Heroux A, Jeon J, Kim J, VanDemark AP, Pugh BF and Arndt KM. (2016) The Histone Modification Domain of Paf1 Complex Subunit Rtf1 Directly Stimulates H2B Ubiquitylation through an Interaction with Rad6. Mol. Cell. 64(4):815-825",
            "de Dieuleveult, M*, Yen K*#, Hmitou I*, Depaux A*, Boussouar F, Dargham DB, Jounier S, Humbertclaude H, Ribierre F, Baulard C, Farrell NP, Park B, Keime C, Carriere L, Merlivet S, Gut M, Gut I, Werner M, Deleuze JF, Olaso R, Aude JC, Chantalat S, Pugh BF and Gerard M. (2016) Genome-wide nucleosome specificity and function of chromatin remodellers in ES cells. Nature. 530(7588):113-116",
            "Yao W, King DA, Beckwith SL, Gowans GJ, Yen K, Zhou C. and Morrison AJ. (2016) The INO80 Complex Requires the Arp5-Ies6 Subcomplex for Chromatin-Remodeling and Metabolic Regulation. Mol Cell Biol. 36(6):979-91",
            "Aguilar-Gurrieri C, Larabi A, Vinayachandran V, Patel NA, Yen K, Reja R, Ebong IO, Schoehn G, Robinson CV, Pugh BF and Panne D. (2016) Structural evidence for Nap1-dependent H2A-H2B deposition and nucleosome assembly. EMBO J. 35(13):1465-82",
            "Yen K, Vinayachandran V and Pugh BF. (2013) Genome-wide structural integration of SWR-C and INO80 chromatin remodelers at +1 nucleosomes. Cell. 154(6):1246-56",
            "Yen K, Vinayachandran V, Batta K, Koerber RT and Pugh BF. (2012) Genome-wide nucleosome specificity and directionality of chromatin remodelers. Cell. 149(7):1461-73",
            "Lee J-S, Garrett AS, Yen K, Takahashi Y-H, Hu D, Jackson J, Seidel C, Pugh BF and Ali Shilatifard. (2012) Co-dependency of H2B monoubiquitination and nucleosome re-assembly on Chd1. Genes Dev. 26(9):914-9",
            "Batta K, Zhang Z, Yen K, Goffman DB and Pugh BF. (2011) Genome-wide function of H2B ubiquitylation in promoter and genic regions. Genes Dev. 25(21):2254-65",
            "Young ET, Yen K, Dombek KM, Law GL, Chang E and Arms E. (2009) Snf1-independent, glucose-resistant transcription of Adr1-dependent genes in a mediator mutant of Saccharomyces cerevisiae. Mol Microbiol. 74(2):364-83",
            "Wishart JA, Osborn M, Gent ME, Yen K, Vujovic Z, Gitsham P, Zhang N, Ross Miller J and Oliver SG. (2006) The relative merits of the tetO2 and tetO7 promoter systems for the functional analysis of heterologous genes in yeast and a compilation of essential yeast genes with tetO2 promoter substitutions. Yeast. 23(4):325-31",
            "Yen K, Gitsham P, Wishart J, Oliver SG and Zhang N. (2003) An improved tetO promoter replacement system for regulating the expression of yeast genes. Yeast. 20(15):1255-62",
            "Zhang N, Osborn M, Gitsham P, Yen K, Miller JR and Oliver SG. (2003) Using yeast to place human genes in functional categories. Gene. 303:121-129"
          ]
        }
      ]
    }
  },
  people: {
    en: {
      title: "People",
      intro: "Current and former members of the Yen Lab.",
      sections: [
        {
          heading: "Kuangyu Yen, PhD",
          body:
            "Researcher at the State Key Laboratory of Experimental Hematology, Chinese Academy of Medical Sciences & Peking Union Medical College. Dr. Yen trained in molecular biology at the University of Manchester, completed postdoctoral work at the University of Washington and Pennsylvania State University, and joined IHCAMS in 2022 after serving as Professor at Southern Medical University.",
          tags: ["Principal Investigator", "chromatin biology", "hematopoiesis"]
        },
        {
          heading: "Current members",
          list: [
            "Ting Lu / 卢婷 - Research Associate; Developmental biology; Molecular biologist and bioinformatician; Email: luting@ihcams.ac.cn; luting062@gmail.com",
            "Shaokang Mo / 莫少康 - PhD student; Developmental biology; Bioinformatician; Email: soap79022@outlook.com; moshaokang@ihcams.ac.cn",
            "Zhe Zhao / 赵哲 - PhD student; Stem cell and regenerative medicine; Email: zhaozhe1243988167@163.com; zhaozhe@ihcams.ac.cn",
            "Yanan Fu / 傅雅楠 - Master student; Stem cell and regenerative medicine; Email: fuyanan@ihcams.ac.cn",
            "Can Hu / 胡灿 - Master student; Molecular biologist",
            "Bin Qi / 祁彬 - Accountant; Email: 1989628666@qq.com"
          ]
        },
        {
          heading: "Alumni still collaborating",
          list: [
            "Junfeng Huang / 黄俊峰 - Research Associate; Bioinformatics; Bioinformatician; Email: jfhuang.dg@gmail.com"
          ]
        },
        {
          heading: "Alumni",
          list: [
            "Yifan Ye / 叶一帆 - Master student; Stem cell and regenerative medicine; Email: yyfan_0228@163.com; yeyifan@ihcams.ac.cn",
            "吴鹏飞 - Master student; Biochemistry; Cell biologist",
            "Houyu Zhang / 张厚煜 - Master student; Developmental biology; Bioinformatician; Email: hughiez047@gmail.com",
            "Jianyu Yang / 杨剑宇 - Master student; Developmental biology; Bioinformatician; Email: yztxwd@gmail.com; jmy5455@psu.edu",
            "Kengyuan Qu / 瞿铿沅 - Master student; Human anatomy, histology and embryology; Cell biologist; Email: 465336766@qq.com",
            "Shan Liu / 刘珊 - PhD student; Developmental biology; Molecular biologist; Email: 729988168@qq.com; sango63520@163.com",
            "Qiwei Li / 李奇威 - PhD student; Developmental biology; Molecular biologist; Email: qi_will@foxmail.com",
            "Liu Yang / 杨柳 - PhD student; Developmental biology; Bioinformatician; Email: 17694944948@163.com",
            "Xiao Fang / 方潇 - Research Associate; Developmental biology; Cell biologist; Email: fancyxiao0330@yeah.net; fangxiao@scut.edu.cn"
          ]
        }
      ]
    },
    zh: {
      title: "团队成员",
      intro: "颜光玗课题组现有成员与毕业成员。",
      sections: [
        {
          heading: "颜光玗 博士",
          body:
            "中国医学科学院血液病医院（中国医学科学院血液学研究所）血液与健康全国重点实验室研究员。颜光玗博士在英国曼彻斯特大学接受分子生物学训练，曾在美国华盛顿大学和宾夕法尼亚州立大学从事博士后研究，之后任南方医科大学教授，并于 2022 年加入中国医学科学院血液病医院。",
          tags: ["课题组负责人", "染色质生物学", "造血发生"]
        },
        {
          heading: "现有成员",
          list: [
            "卢婷 / Ting Lu - 助理研究员；发育生物学；分子生物学与生物信息学；邮箱：luting@ihcams.ac.cn；luting062@gmail.com",
            "莫少康 / Shaokang Mo - 博士研究生；发育生物学；生物信息学；邮箱：soap79022@outlook.com；moshaokang@ihcams.ac.cn",
            "赵哲 / Zhe Zhao - 博士研究生；干细胞与再生医学；邮箱：zhaozhe1243988167@163.com；zhaozhe@ihcams.ac.cn",
            "傅雅楠 / Yanan Fu - 硕士研究生；干细胞与再生医学；邮箱：fuyanan@ihcams.ac.cn",
            "胡灿 - 硕士研究生；分子生物学",
            "祁彬 / Bin Qi - 会计；邮箱：1989628666@qq.com"
          ]
        },
        {
          heading: "仍在合作的毕业成员",
          list: [
            "黄俊峰 / Junfeng Huang - 科研人员；生物信息学；邮箱：jfhuang.dg@gmail.com"
          ]
        },
        {
          heading: "毕业成员",
          list: [
            "叶一帆 / Yifan Ye - 硕士研究生；干细胞与再生医学；邮箱：yyfan_0228@163.com；yeyifan@ihcams.ac.cn",
            "吴鹏飞 - 硕士研究生；生物化学；细胞生物学",
            "张厚煜 / Houyu Zhang - 硕士研究生；发育生物学；生物信息学；邮箱：hughiez047@gmail.com",
            "杨剑宇 / Jianyu Yang - 硕士研究生；发育生物学；生物信息学；邮箱：yztxwd@gmail.com；jmy5455@psu.edu",
            "瞿铿沅 / Kengyuan Qu - 硕士研究生；人体解剖与组织胚胎学；细胞生物学；邮箱：465336766@qq.com",
            "刘珊 / Shan Liu - 博士研究生；发育生物学；分子生物学；邮箱：729988168@qq.com；sango63520@163.com",
            "李奇威 / Qiwei Li - 博士研究生；发育生物学；分子生物学；邮箱：qi_will@foxmail.com",
            "杨柳 / Liu Yang - 博士研究生；发育生物学；生物信息学；邮箱：17694944948@163.com",
            "方潇 / Xiao Fang - 科研人员；发育生物学；细胞生物学；邮箱：fancyxiao0330@yeah.net；fangxiao@scut.edu.cn"
          ]
        }
      ]
    }
  },
  resources: {
    en: {
      title: "Resources and Methods",
      intro:
        "A lightweight page for methods, protocols, tools, and datasets that can be expanded as lab outputs become ready to share.",
      sections: [
        {
          heading: "Differentiation systems and protocols",
          body:
            "Human pluripotent stem cell differentiation toward hematopoietic progenitor states provides a model for endothelial-to-hematopoietic transition and lineage commitment. Published protocol: Mo, Qu, Shen, and Yen, STAR Protocols, 2025. DOI: https://doi.org/10.1016/j.xpro.2024.103545",
          tags: ["hPSC", "hematopoietic progenitors", "STAR Protocols"]
        },
        {
          heading: "Computational analysis",
          body:
            "In-house bioinformatic tools support nucleosome subtype characterization, structural footprinting, transcriptional dynamics, and tipping-point analysis. Public code and resources are maintained through the Yen Lab GitHub: https://github.com/YenLab",
          tags: ["genomics", "footprinting", "tipping points"]
        },
        {
          heading: "Mechanistic validation",
          body:
            "Biochemical reconstitution and targeted validation connect regulatory candidates with mechanism.",
          tags: ["reconstitution", "validation", "mechanism"]
        }
      ]
    },
    zh: {
      title: "资源方法",
      intro: "该页面用于逐步整理课题组可公开分享的方法、工具和数据集。",
      sections: [
        {
          heading: "体外分化体系与实验方法",
          body:
            "以人多能干细胞向造血祖细胞分化为模型，研究内皮向造血转变和谱系承诺。已发表方法：Mo, Qu, Shen, and Yen, STAR Protocols, 2025. DOI: https://doi.org/10.1016/j.xpro.2024.103545",
          tags: ["人多能干细胞", "造血祖细胞", "STAR Protocols"]
        },
        {
          heading: "计算分析",
          body:
            "课题组自主开发和整合生物信息学方法，用于核小体亚型识别、结构足迹分析、转录动态和临界点研究。公开代码和资源通过 Yen Lab GitHub 维护：https://github.com/YenLab",
          tags: ["基因组学", "结构足迹", "临界点"]
        },
        {
          heading: "机制验证",
          body: "通过生化重构和针对性验证，将候选调控因子与机制研究相连接。",
          tags: ["生化重构", "功能验证", "机制研究"]
        }
      ]
    }
  },
  join: {
    en: {
      title: "Join Us",
      intro:
        "We welcome motivated trainees and collaborators interested in chromatin regulation, hematopoiesis, computational genomics, and leukemia biology.",
      sections: [
        {
          heading: "Students and postdoctoral fellows",
          body:
            "Strong candidates may come from molecular biology, hematology, developmental biology, genomics, computational biology, or related fields. Curiosity, rigor, and willingness to connect wet-lab and computational reasoning are especially valued.",
          tags: ["graduate training", "postdoctoral research"]
        },
        {
          heading: "Collaborators",
          body:
            "The lab is open to collaborations that connect chromatin mechanism, cell-fate transition, clinical samples, functional genomics, or computational methods.",
          tags: ["collaboration", "clinical samples", "functional genomics"]
        },
        {
          heading: "Contact",
          body:
            "For opportunities or scientific discussions, contact kuangyuyen@ihcams.ac.cn. Please include a short research-interest statement and CV when writing about training positions.",
          tags: ["kuangyuyen@ihcams.ac.cn", "Tianjin"]
        }
      ]
    },
    zh: {
      title: "加入我们",
      intro: "欢迎对染色质调控、造血发生、计算基因组学和白血病生物学感兴趣的学生、博士后和合作伙伴联系。",
      sections: [
        {
          heading: "研究生与博士后",
          body:
            "欢迎具有分子生物学、血液学、发育生物学、基因组学、计算生物学或相关背景的申请者。课题组重视好奇心、严谨性，以及把实验和计算思维结合起来的能力。",
          tags: ["研究生培养", "博士后研究"]
        },
        {
          heading: "合作研究",
          body:
            "课题组欢迎围绕染色质机制、细胞命运转变、临床样本、功能基因组学和计算方法开展合作。",
          tags: ["合作", "临床样本", "功能基因组学"]
        },
        {
          heading: "联系方式",
          body:
            "科研交流或申请加入课题组请联系 kuangyuyen@ihcams.ac.cn。申请培养岗位时建议附简短研究兴趣说明和个人简历。",
          tags: ["kuangyuyen@ihcams.ac.cn", "天津"]
        }
      ]
    }
  }
};

export const sectionPaths = Object.keys(pages) as Array<Exclude<PageKey, "home">>;

export type PageContent = {
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    body?: string;
    tags?: string[];
    list?: string[];
  }>;
};
