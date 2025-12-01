/**
 * Chinese Foreign Influence Groups (FIGs) Data
 * Auto-generated from CN_FIGs.csv
 * Total entries: 2024
 */

export interface CNFigEntry {
  riskRating: 'HIGH' | 'MEDIUM' | 'LOW';
  countryCode: string;
  institution: string;
  kind: string;
  securityCredentials: string;
  endUserLists: string;
  espionage: string;
}

export interface NormalizedCNFigEntry extends CNFigEntry {
  normalizedName: string;
}

/**
 * Map of normalized institution names to their FIG data
 */
export const CN_FIGS_MAP = new Map<string, CNFigEntry>([["academy of military science",{"riskRating":"HIGH","countryCode":"CN","institution":"Academy of Military Science","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["aero engine corporation of china",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aero Engine Corporation of China","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force command college",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Command College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force communication nco academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Communication NCO Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force early warning academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Early Warning Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Engineering University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["air force flight academy shijiazhuang",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Flight Academy Shijiazhuang","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force harbin flight academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Harbin Flight Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force logistics university",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Logistics University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Medical University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Research Institute","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["air force xi’an flight academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Xi’an Flight Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army academy of armored forces",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Academy of Armored Forces","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army academy of artillery and air defense",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Academy of Artillery and Air Defense","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army academy of border and coastal defense",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Academy of Border and Coastal Defense","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army aviation college",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Aviation College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Engineering University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army infantry academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Infantry Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Medical University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army military transportation academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Military Transportation Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Research Institute","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army service academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Service Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["army special operations academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Special Operations Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["aviation industry corporation of china",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aviation Industry Corporation of China","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["aviation university of air force",{"riskRating":"HIGH","countryCode":"CN","institution":"Aviation University of Air Force","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["beihang university",{"riskRating":"HIGH","countryCode":"CN","institution":"Beihang University","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"None"}],["beijing institute of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Technology","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"None"}],["beijing normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Normal University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["beijing university of chemical technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing University of Chemical Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["beijing university of posts and telecommunications",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing University of Posts and Telecommunications","kind":"Civilian","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"None"}],["central south university",{"riskRating":"HIGH","countryCode":"CN","institution":"Central South University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["changchun university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Changchun University of Science and Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["china aerodynamics research and development center",{"riskRating":"HIGH","countryCode":"CN","institution":"China Aerodynamics Research and Development Center","kind":"Military","securityCredentials":"None","endUserLists":"Yes","espionage":"None"}],["china aerospace science and industry corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"China Aerospace Science and Industry Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["china aerospace science and technology corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"China Aerospace Science and Technology Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["china agricultural university",{"riskRating":"HIGH","countryCode":"CN","institution":"China Agricultural University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["china coast guard academy",{"riskRating":"HIGH","countryCode":"CN","institution":"China Coast Guard Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["china electronics corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"China Electronics Technology Group Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["china national nuclear corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China National Nuclear Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["china north industries group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China North Industries Group","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["china shipbuilding industry corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Shipbuilding Industry Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["china south industries group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China South Industries Group","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["china state shipbuilding corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China State Shipbuilding Corporation","kind":"Defence industry conglomerate","securityCredentials":"None","endUserLists":"Yes","espionage":"None"}],["china university of mining and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"China University of Mining and Technology","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["chinese academy of engineering physics",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese Academy of Engineering Physics","kind":"Military","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["chongqing university",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["dalian naval academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Dalian Naval Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["dalian university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Dalian University of Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["east china normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"East China Normal University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["engineering university of the capf",{"riskRating":"HIGH","countryCode":"CN","institution":"Engineering University of the CAPF","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["fudan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Fudan University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["fuzhou university",{"riskRating":"HIGH","countryCode":"CN","institution":"Fuzhou University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["guilin university of electronic science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Guilin University of Electronic Science and Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["hangzhou dianzi university",{"riskRating":"HIGH","countryCode":"CN","institution":"Hangzhou Dianzi University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["hangzhou normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"Hangzhou Normal University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["harbin engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"Harbin Engineering University","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"Yes"}],["harbin institute of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Harbin Institute of Technology","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"Yes"}],["hebei university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Hebei University of Science and Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["hefei university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Hefei University of Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["huazhong university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Huazhong University of Science and Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["hunan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Hunan University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"Yes"}],["information engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"Information Engineering University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["institute of nbc defense",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of NBC Defense","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["jiangsu university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Jiangsu University of Science and Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["jilin university",{"riskRating":"HIGH","countryCode":"CN","institution":"Jilin University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["lanzhou university",{"riskRating":"HIGH","countryCode":"CN","institution":"Lanzhou University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["logistics university of the people’s armed police force",{"riskRating":"HIGH","countryCode":"CN","institution":"Logistics University of the People’s Armed Police Force","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["nanchang hangkong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanchang Hangkong University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["nanjing army command college",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing Army Command College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["nanjing university",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["nanjing university of aeronautics and astronautics",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing University of Aeronautics and Astronautics","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"Yes"}],["nanjing university of posts and telecommunications",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing University of Posts and Telecommunications","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["nanjing university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing University of Science and Technology","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"None"}],["nankai university",{"riskRating":"HIGH","countryCode":"CN","institution":"Nankai University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["national defense university",{"riskRating":"HIGH","countryCode":"CN","institution":"National Defense University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["national university of defense technology",{"riskRating":"HIGH","countryCode":"CN","institution":"National University of Defense Technology","kind":"Military","securityCredentials":"None","endUserLists":"Yes","espionage":"Yes"}],["naval command college",{"riskRating":"HIGH","countryCode":"CN","institution":"Naval Command College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["naval petty officer academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Naval Petty Officer Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["naval research academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Naval Research Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["naval university of engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Naval University of Engineering","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["navy aviation university",{"riskRating":"HIGH","countryCode":"CN","institution":"Navy Aviation University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["navy logistics academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Navy Logistics Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["navy medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Navy Medical University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["navy submarine academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Navy Submarine Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["north china institute of aerospace engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"North China Institute of Aerospace Engineering","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["north china university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"North China University of Science and Technology","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["north university of china",{"riskRating":"HIGH","countryCode":"CN","institution":"North University of China","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"Yes"}],["northwest institute of nuclear technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Northwest Institute of Nuclear Technology","kind":"Military","securityCredentials":"None","endUserLists":"Yes","espionage":"None"}],["northwestern polytechnical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Northwestern Polytechnical University","kind":"Seven Sons","securityCredentials":"Top secret","endUserLists":"Yes","espionage":"Yes"}],["ocean university of china",{"riskRating":"HIGH","countryCode":"CN","institution":"Ocean University of China","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"None"}],["officers college of the pap",{"riskRating":"HIGH","countryCode":"CN","institution":"Officers College of the PAP","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["pap nco college",{"riskRating":"HIGH","countryCode":"CN","institution":"PAP NCO College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["peking university",{"riskRating":"HIGH","countryCode":"CN","institution":"Peking University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["people’s armed police command college",{"riskRating":"HIGH","countryCode":"CN","institution":"People’s Armed Police Command College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["rocket force command college",{"riskRating":"HIGH","countryCode":"CN","institution":"Rocket Force Command College","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["rocket force research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Rocket Force Research Institute","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["rocket force sergeant school",{"riskRating":"HIGH","countryCode":"CN","institution":"Rocket Force Sergeant School","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["rocket force university of engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Rocket Force University of Engineering","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["shandong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shandong University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["shanghai jiao tong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Jiao Tong University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"Yes"}],["shanghai university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["shenyang aerospace university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shenyang Aerospace University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["shenyang ligong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shenyang Ligong University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["sichuan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Sichuan University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"Yes"}],["southeast university",{"riskRating":"HIGH","countryCode":"CN","institution":"Southeast University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"Yes"}],["southern university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Southern University of Science and Technology","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["southwest university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Southwest University of Science and Technology","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["space engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"Space Engineering University","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["special police academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Special Police Academy","kind":"Military","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["sun yat-sen university",{"riskRating":"HIGH","countryCode":"CN","institution":"Sun Yat-sen University","kind":"Civilian","securityCredentials":"None","endUserLists":"Yes","espionage":"None"}],["tianjin polytechnic university",{"riskRating":"HIGH","countryCode":"CN","institution":"Tianjin Polytechnic University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["tianjin university",{"riskRating":"HIGH","countryCode":"CN","institution":"Tianjin University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"Yes"}],["tongji university",{"riskRating":"HIGH","countryCode":"CN","institution":"Tongji University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"None"}],["tsinghua university",{"riskRating":"HIGH","countryCode":"CN","institution":"Tsinghua University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"Yes"}],["university of electronic science and technology of china",{"riskRating":"HIGH","countryCode":"CN","institution":"University of Electronic Science and Technology of China","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"Yes"}],["university of science and technology beijing",{"riskRating":"HIGH","countryCode":"CN","institution":"University of Science and Technology Beijing","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["university of science and technology of china",{"riskRating":"HIGH","countryCode":"CN","institution":"University of Science and Technology of China","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["wuhan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Wuhan University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"Yes"}],["xiamen university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xiamen University","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"Yes"}],["xidian university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xidian University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["xi’an jiaotong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi’an Jiaotong University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"Yes"}],["xi’an university of posts and telecommunications",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi’an University of Posts and Telecommunications","kind":"Civilian","securityCredentials":"None","endUserLists":"None","espionage":"None"}],["yanshan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Yanshan University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"None"}],["zhejiang university",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhejiang University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"None","espionage":"Yes"}],["zhengzhou university",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhengzhou University","kind":"Civilian","securityCredentials":"Secret","endUserLists":"Yes","espionage":"None"}],["xi'an jiaotong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Jiaotong University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["capital medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Capital Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["southern medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Southern Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["west china hospital of sichuan university",{"riskRating":"HIGH","countryCode":"CN","institution":"West China Hospital of Sichuan University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing university of information science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing University of Information Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jiangsu university",{"riskRating":"HIGH","countryCode":"CN","institution":"Jiangsu University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["zhejiang university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhejiang University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hohai university",{"riskRating":"HIGH","countryCode":"CN","institution":"Hohai University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing forestry university",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing Forestry University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jiangnan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Jiangnan University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["southwest jiaotong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Southwest Jiaotong University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["henan university",{"riskRating":"HIGH","countryCode":"CN","institution":"Henan University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["guangxi university",{"riskRating":"HIGH","countryCode":"CN","institution":"Guangxi University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of physics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Physics","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["chinese pla general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese PLA General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china university of petroleum",{"riskRating":"HIGH","countryCode":"CN","institution":"\"China University of Petroleum","kind":"East China\"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of geographic sciences and natural resources research",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Geographic Sciences and Natural Resources Research","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["chang'an university",{"riskRating":"HIGH","countryCode":"CN","institution":"Chang'an University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first affiliated hospital of zhengzhou university",{"riskRating":"HIGH","countryCode":"CN","institution":"First Affiliated Hospital of Zhengzhou University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of atmospheric physics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Atmospheric Physics","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["taiyuan university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Taiyuan University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai university of traditional chinese medicine",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai University of Traditional Chinese Medicine","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sichuan agricultural university",{"riskRating":"HIGH","countryCode":"CN","institution":"Sichuan Agricultural University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of automation",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Automation","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["zhejiang lab",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhejiang Lab","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["aerospace information research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Aerospace Information Research Institute","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["changsha university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Changsha University of Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xuan wu hospital of the capital medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xuan Wu Hospital of the Capital Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["henan agricultural university",{"riskRating":"HIGH","countryCode":"CN","institution":"Henan Agricultural University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of biophysics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Biophysics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of metals research",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Metals Research","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["second military medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Second Military Medical University","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["wenzhou university",{"riskRating":"HIGH","countryCode":"CN","institution":"Wenzhou University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shaanxi university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Shaanxi University of Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanfang hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanfang Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai ocean university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Ocean University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of applied ecology",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Applied Ecology","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["southwest petroleum university",{"riskRating":"HIGH","countryCode":"CN","institution":"Southwest Petroleum University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["university of jinan",{"riskRating":"HIGH","countryCode":"CN","institution":"University of Jinan","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["guilin university of electronic technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Guilin University of Electronic Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["guangxi medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Guangxi Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national astronomical observatories",{"riskRating":"HIGH","countryCode":"CN","institution":"National Astronomical Observatories","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["institute of semiconductors",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Semiconductors","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai astronomical observatory",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Astronomical Observatory","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["bgi group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BGI Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china jiliang university",{"riskRating":"HIGH","countryCode":"CN","institution":"China Jiliang University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["ministry of natural resources",{"riskRating":"HIGH","countryCode":"CN","institution":"Ministry of Natural Resources","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china three gorges university",{"riskRating":"HIGH","countryCode":"CN","institution":"China Three Gorges University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of mechanics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Mechanics","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["huawei technologies",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Technologies","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing computational science research center",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Computational Science Research Center","kind":"Military","securityCredentials":"","endUserLists":"Yes","espionage":""}],["xi'an university of architecture and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an University of Architecture and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china academy of chinese medical sciences",{"riskRating":"HIGH","countryCode":"CN","institution":"China Academy of Chinese Medical Sciences","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chinese academy of geological sciences",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese Academy of Geological Sciences","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["dalian medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Dalian Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Tianjin University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national space science center",{"riskRating":"HIGH","countryCode":"CN","institution":"National Space Science Center","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["first affiliated hospital of guangxi medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"First Affiliated Hospital of GuangXi Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["lanzhou institute of chemical physics",{"riskRating":"HIGH","countryCode":"CN","institution":"Lanzhou Institute of Chemical Physics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai university of engineering sciences",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai University of Engineering Sciences","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["center for high pressure science and technology advanced research",{"riskRating":"HIGH","countryCode":"CN","institution":"Center for High Pressure Science and Technology Advanced Research","kind":"Military","securityCredentials":"","endUserLists":"Yes","espionage":""}],["institute of information engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Information Engineering","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Tianjin University of Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["qingdao university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Qingdao University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xijing hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Xijing Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["institute of earth environment",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Earth Environment","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["chinese people's liberation army",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese People's Liberation Army","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chinese academy of fishery sciences",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese Academy of Fishery Sciences","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang institute of ecology and geography",{"riskRating":"HIGH","countryCode":"CN","institution":"Xinjiang Institute of Ecology and Geography","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["first affiliated hospital of anhui medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"First Affiliated Hospital of Anhui Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of software",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Software","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["academy of military medical sciences",{"riskRating":"HIGH","countryCode":"CN","institution":"Academy of Military Medical Sciences","kind":"Military","securityCredentials":"","endUserLists":"Yes","espionage":""}],["\"changchun institute of optics",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Changchun Institute of Optics","kind":"Fine Mechanics and Physics\"","securityCredentials":"Chinese Academy of Sciences","endUserLists":"","espionage":""}],["zhujiang hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhujiang Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu university of information technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Chengdu University of Information Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai pulmonary hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Pulmonary Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china institute of water resources and hydropower research",{"riskRating":"HIGH","countryCode":"CN","institution":"China Institute of Water Resources and Hydropower Research","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["changhai hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Changhai Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["china geological survey",{"riskRating":"HIGH","countryCode":"CN","institution":"China Geological Survey","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen people’s hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"ShenZhen People’s Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing sport university",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Sport University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hefei institutes of physical science",{"riskRating":"HIGH","countryCode":"CN","institution":"Hefei Institutes of Physical Science","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["chongqing technology and business university",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing Technology and Business University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shandong provincial hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Shandong Provincial Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["center for high pressure science & technology advanced research",{"riskRating":"HIGH","countryCode":"CN","institution":"Center for High Pressure Science & Technology Advanced Research","kind":"Military","securityCredentials":"","endUserLists":"Yes","espionage":""}],["xiamen university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Xiamen University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["north china university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"North China University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai changzheng hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Changzheng Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an technological university",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xi'an Technological University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai institute of optics and fine mechanics",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Institute of Optics and Fine Mechanics","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["qingdao national laboratory for marine science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Qingdao National Laboratory for Marine Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of rock and soil mechanics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Rock and Soil Mechanics","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["zunyi medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Zunyi Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first institute of oceanography",{"riskRating":"HIGH","countryCode":"CN","institution":"First Institute of Oceanography","kind":"Ministry of Natural Resources","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an institute of optics and precision mechanics",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Institute of Optics and Precision Mechanics","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["chongqing normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing Normal University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first affiliated hospital of dalian medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"First Affiliated Hospital of Dalian Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of applied physics and computational mathematics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Applied Physics and Computational Mathematics","kind":"Military","securityCredentials":"","endUserLists":"Yes","espionage":""}],["institute of electrical engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Electrical Engineering","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["shenyang institute of automation",{"riskRating":"HIGH","countryCode":"CN","institution":"Shenyang Institute of Automation","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"Yes","espionage":""}],["chongqing institute of green and intelligent technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing Institute of Green and Intelligent Technology","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["guilin medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Guilin Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["anhui university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Anhui University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing proteome research center",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Proteome Research Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing general hospital of nanjing military command",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing General Hospital of Nanjing Military Command","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china national offshore oil corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China National Offshore Oil Corporation","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["wuhan institute of physics and mathematics",{"riskRating":"HIGH","countryCode":"CN","institution":"Wuhan Institute of Physics and Mathematics","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["affiliated hospital of guizhou medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Affiliated Hospital of Guizhou Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china academy of space technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Academy of Space Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china national chemical corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China National Chemical Corporation","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["dalian university",{"riskRating":"HIGH","countryCode":"CN","institution":"Dalian University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenyang university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Shenyang University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shaanxi university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Shaanxi University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chongqing general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["guangxi university of chinese medicine",{"riskRating":"HIGH","countryCode":"CN","institution":"Guangxi University of Chinese Medicine","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tang du hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Tang Du Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["computer network information center",{"riskRating":"HIGH","countryCode":"CN","institution":"Computer Network Information Center","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["affiliated hospital of zunyi medical college",{"riskRating":"HIGH","countryCode":"CN","institution":"Affiliated Hospital of Zunyi Medical College","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["daping hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Daping Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["taihe hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Taihe Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["suzhou institute of biomedical engineering and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Suzhou Institute of Biomedical Engineering and Technology","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["xiyuan hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Xiyuan Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["southwest hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Southwest Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of petrochemical technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Petrochemical Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["affiliated hospital of jiangsu university",{"riskRating":"HIGH","countryCode":"CN","institution":"Affiliated Hospital of Jiangsu University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["pla army engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"PLA Army Engineering University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national institute of metrology",{"riskRating":"HIGH","countryCode":"CN","institution":"National Institute of Metrology","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["beijing academy of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Academy of Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["qingdao institute of marine geology",{"riskRating":"HIGH","countryCode":"CN","institution":"Qingdao Institute of Marine Geology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china three gorges corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Three Gorges Corporation","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["shandong jiaotong university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shandong Jiaotong University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jiujiang university",{"riskRating":"HIGH","countryCode":"CN","institution":"Jiujiang University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing academy of quantum information sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Academy of Quantum Information Sciences","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["shangqiu normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"Shangqiu Normal University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china mobile",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Mobile","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["the people's hospital of guangxi zhuang autonomous region",{"riskRating":"HIGH","countryCode":"CN","institution":"The People's Hospital of Guangxi Zhuang Autonomous Region","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xinqiao hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Xinqiao Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xinjiang Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["changchun university of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Changchun University of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first hospital of lanzhou university",{"riskRating":"HIGH","countryCode":"CN","institution":"First Hospital of Lanzhou University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sensetime",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SenseTime","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["luoyang institute of science and technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Luoyang Institute of Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["eastern hepatobiliary surgery hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Eastern Hepatobiliary Surgery Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["china academy of launch vehicle technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Academy of Launch Vehicle Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first hospital of qinhuangdao",{"riskRating":"HIGH","countryCode":"CN","institution":"First Hospital of Qinhuangdao","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["zhengzhou normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhengzhou Normal University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["general hospital of shenyang military region",{"riskRating":"HIGH","countryCode":"CN","institution":"General Hospital of Shenyang Military Region","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang normal university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xinjiang Normal University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["crrc",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CRRC","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["inspur",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Inspur","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["wuhan ship development & design institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wuhan Ship Development & Design Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["air force general hospital pla",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force General Hospital PLA","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Communications Construction Company","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["tumor hospital of guangxi medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Tumor Hospital of Guangxi Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china telecom",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Telecom","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["china telecommunications corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Telecommunications Corporation","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["chongqing academy of animal science",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing Academy of Animal Science","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu military general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Chengdu Military General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing microelectronics technology institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Microelectronics Technology Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china state construction engineering",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China State Construction Engineering","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["beijing meteorological bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Meteorological Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["megvii",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Megvii","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai academy of spaceflight technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Academy of Spaceflight Technology","kind":"Defence industry conglomerate","securityCredentials":"","endUserLists":"Yes","espionage":""}],["zte",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ZTE","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china united network communications group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China United Network Communications Group","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["bejing institute of aeronautical materials",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Bejing Institute of Aeronautical Materials","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["general hospital of guangzhou military command",{"riskRating":"HIGH","countryCode":"CN","institution":"General Hospital of Guangzhou Military Command","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["dà-jiāng innovations science and technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Dà-Jiāng Innovations Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["302 military hospital of china",{"riskRating":"HIGH","countryCode":"CN","institution":"302 Military Hospital of China","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["fuzhou general hospital of nanjing military command",{"riskRating":"HIGH","countryCode":"CN","institution":"Fuzhou General Hospital of Nanjing Military Command","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["academy of military transportation",{"riskRating":"HIGH","countryCode":"CN","institution":"Academy of Military Transportation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sichuan cancer hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Sichuan Cancer Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei semiconductor research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Hebei Semiconductor Research Institute","kind":"Defence industry conglomerate","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing institute of astronomical optics & technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing Institute of Astronomical Optics & Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["pla 306 hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"PLA 306 Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["pla air force aviation university",{"riskRating":"HIGH","countryCode":"CN","institution":"PLA Air Force Aviation University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china railway construction corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Railway Construction Corporation","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["institute of electronics",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["fiberhome technology group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Fiberhome Technology Group","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["jinan institute of quantum technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jinan Institute of Quantum Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hainan branch of people's liberation army general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Hainan Branch of People's Liberation Army General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["kunming general hospital of chengdu military command",{"riskRating":"HIGH","countryCode":"CN","institution":"Kunming General Hospital of Chengdu Military Command","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["cssc offshore & marine engineering company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CSSC Offshore & Marine Engineering Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the military general hospital of beijing pla",{"riskRating":"HIGH","countryCode":"CN","institution":"The Military General Hospital of Beijing PLA","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china information technology security evaluation center",{"riskRating":"HIGH","countryCode":"CN","institution":"China Information Technology Security Evaluation Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china information security evaluation center",{"riskRating":"HIGH","countryCode":"CN","institution":"China Information Security Evaluation Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["delta electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Delta Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the 180th hospital of pla",{"riskRating":"HIGH","countryCode":"CN","institution":"The 180th Hospital of PLA","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["303 hospital of people's liberation army",{"riskRating":"HIGH","countryCode":"CN","institution":"303 Hospital of People's Liberation Army","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing research institute of automation for machinery industry",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Research Institute of Automation for Machinery Industry","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["dahua technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Dahua Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["iflytek",{"riskRating":"MEDIUM","countryCode":"CN","institution":"iFlytek","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["pla navy general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"PLA Navy General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["bargawine hong kong limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BARGAWINE HONG KONG LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sz dji technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SZ DJI TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sinotech industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SINOTECH INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen jiasibo technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN JIASIBO TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["liberty shipping co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"LIBERTY SHIPPING CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["zhihang ship management shanghai co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ZHIHANG SHIP MANAGEMENT SHANGHAI CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["cielo maritime ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CIELO MARITIME LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avic jonhon optronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AVIC Jonhon Optronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["jinan kewei optics co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"JINAN KEWEI OPTICS CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["mornsun guangzhou science and technology co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"MORNSUN GUANGZHOU SCIENCE AND TECHNOLOGY CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangxi hongdu aviation industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangxi Hongdu Aviation Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing jinghua qidi electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING JINGHUA QIDI ELECTRONIC TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shandong qiwangwa petrochemical co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHANDONG QIWANGWA PETROCHEMICAL CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dalian zhongchuang char-white co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DALIAN ZHONGCHUANG CHAR-WHITE CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding industry company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHINA SHIPBUILDING INDUSTRY COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guizhou space appliance co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"GUIZHOU SPACE APPLIANCE CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu bangdeya new material technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JIANGSU BANGDEYA NEW MATERIAL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china united network communications group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China United Network Communications Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shaanxi zhongtian rocket technology company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SHAANXI ZHONGTIAN ROCKET TECHNOLOGY COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avic xi'an aircraft industry group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AVIC XI'AN AIRCRAFT INDUSTRY GROUP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen jinghon electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SHENZHEN JINGHON ELECTRONICS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["changsha jingjia microelectronics company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHANGSHA JINGJIA MICROELECTRONICS COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu jingxin technology co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHENGDU JINGXIN TECHNOLOGY CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction group limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHINA COMMUNICATIONS CONSTRUCTION GROUP LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"north navigation control technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"NORTH NAVIGATION CONTROL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan maiwe communication co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WUHAN MAIWE COMMUNICATION CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dawning information industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DAWNING INFORMATION INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yanbian silverstar network technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"YANBIAN SILVERSTAR NETWORK TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin creative source international trade co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"TIANJIN CREATIVE SOURCE INTERNATIONAL TRADE CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen shenchuanghui technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN SHENCHUANGHUI TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing highlander digital technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING HIGHLANDER DIGITAL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"novatek china holdings co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"NOVATEK CHINA HOLDINGS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhonghang electronic measuring instruments co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhonghang Electronic Measuring Instruments Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding industry group power company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHINA SHIPBUILDING INDUSTRY GROUP POWER COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing alite technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING ALITE TECHNOLOGIES CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["allchips limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ALLCHIPS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing zongshen aero engine manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHONGQING ZONGSHEN AERO ENGINE MANUFACTURING CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"raytronic corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"RAYTRONIC CORPORATION","kind":"LIMITED\"","securityCredentials":"","endUserLists":"","espionage":""}],["semiconductor manufacturing international corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Semiconductor Manufacturing International Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china satellite communications co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHINA SATELLITE COMMUNICATIONS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing sukbakso",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BEIJING SUKBAKSO","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen yason general machinery co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN YASON GENERAL MACHINERY CO.","kind":"LTD. NANCHANG BRANCH\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"king-pai technology hk co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"KING-PAI TECHNOLOGY HK CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"granpect co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"GRANPECT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"agu information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AGU INFORMATION TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china head aerospace technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHINA HEAD AEROSPACE TECHNOLOGY COMPANY","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen city mean well electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN CITY MEAN WELL ELECTRONICS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou xiaoli pharmatech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SUZHOU XIAOLI PHARMATECH CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jinhou international holdings co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JINHOU INTERNATIONAL HOLDINGS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"costar group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Costar Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dandong hongxiang industrial development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DANDONG HONGXIANG INDUSTRIAL DEVELOPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"asialink shanghai intl logistics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ASIALINK SHANGHAI INTL LOGISTICS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huashuo semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN HUASHUO SEMICONDUCTOR CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hebei guanlang biotechnology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HEBEI GUANLANG BIOTECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"uu innovation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"UU INNOVATION TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai techinital materials co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHANGHAI TECHINITAL MATERIALS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"henan jiayuan aluminium industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HENAN JIAYUAN ALUMINIUM INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"abascience tech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ABASCIENCE TECH CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huasheng industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN HUASHENG INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou zhongsheng magnetic industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SUZHOU ZHONGSHENG MAGNETIC INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["yinke hk electronics company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"YINKE HK ELECTRONICS COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china nuclear engineering corporation limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHINA NUCLEAR ENGINEERING CORPORATION LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china aerospace times electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHINA AEROSPACE TIMES ELECTRONICS CO.","kind":"LTD\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing deepcool industries co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING DEEPCOOL INDUSTRIES CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["rui en koo technology co limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"RUI EN KOO TECHNOLOGY CO LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"changsha tianyi space science and technology research institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHANGSHA TIANYI SPACE SCIENCE AND TECHNOLOGY RESEARCH INSTITUTE CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["emc sud limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"EMC SUD LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"kaikai technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"KAIKAI TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"izzition e-technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"IZZITION E-TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["yilufa electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"YILUFA ELECTRONICS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan global sensor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WUHAN GLOBAL SENSOR TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["guangzhou alshahari united corporation limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"GUANGZHOU ALSHAHARI UNITED CORPORATION LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["arttronix international hk limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ARTTRONIX INTERNATIONAL HK LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei investment & holding co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Investment & Holding Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xin quan electronics co limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"XIN QUAN ELECTRONICS CO LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen rion technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN RION TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["avic shenyang aircraft company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC Shenyang Aircraft Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"inner mongolia first machinery group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Inner Mongolia First Machinery Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shandong oree laser technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHANDONG OREE LASER TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou keming intelligent technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HANGZHOU KEMING INTELLIGENT TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing yunze technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING YUNZE TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei device co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HUAWEI DEVICE CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou hikvision digital technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou Hikvision Digital Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang zhenhuan cnc machine tool co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ZHEJIANG ZHENHUAN CNC MACHINE TOOL CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["gker laser technology co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"GKER LASER TECHNOLOGY CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["raybeam optronics co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"RAYBEAM OPTRONICS CO. LTD.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing xinghua hengcheng technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING XINGHUA HENGCHENG TECHNOLOGY DEVELOPMENT CO.","kind":"LTD. \"","securityCredentials":"","endUserLists":"","espionage":""}],["jotrin electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"JOTRIN ELECTRONICS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangxi mingzheng intelligent electrical co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangxi Mingzheng Intelligent Electrical Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"foshan golden age motor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"FOSHAN GOLDEN AGE MOTOR TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai jarred industrial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHANGHAI JARRED INDUSTRIAL CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["ll electronic limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"LL ELECTRONIC LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china spacesat co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHINA SPACESAT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chang guang satellite technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHANG GUANG SATELLITE TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wargos industry limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"WARGOS INDUSTRY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yidatong tianjin metal materials co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"YIDATONG TIANJIN METAL MATERIALS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["sinotech dalian carbon and graphite manufacturing corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SINOTECH DALIAN CARBON AND GRAPHITE MANUFACTURING CORPORATION","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"karat industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"KARAT INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"qinsheng pharmaceutical technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"QINSHENG PHARMACEUTICAL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yantai iray technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"YANTAI IRAY TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan shuokang biological technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WUHAN SHUOKANG BIOLOGICAL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["dongguan yuze machining tools company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"DONGGUAN YUZE MACHINING TOOLS COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace ch uav co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Aerospace CH UAV Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["analog technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ANALOG TECHNOLOGY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["guangdong pratic cnc technology co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"GUANGDONG PRATIC CNC TECHNOLOGY CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"anhui greatwall military industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ANHUI GREATWALL MILITARY INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang qingji ind. co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ZHEJIANG QINGJI IND. CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["siliborn technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SILIBORN TECHNOLOGY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangxi liansheng technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JIANGXI LIANSHENG TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"penglai jutal offshore engineering heavy industries co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"PENGLAI JUTAL OFFSHORE ENGINEERING HEAVY INDUSTRIES CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china avionics systems company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHINA AVIONICS SYSTEMS COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"youli technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"YOULI TECHNOLOGY DEVELOPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["ace era co limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ACE ERA CO LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yason general machinery co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"YASON GENERAL MACHINERY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dalian sun moon star international logistics trading co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DALIAN SUN MOON STAR INTERNATIONAL LOGISTICS TRADING CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kvantek limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"KVANTEK LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou fuyang koto machinery co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HANGZHOU FUYANG KOTO MACHINERY CO.","kind":"LTD\"","securityCredentials":"","endUserLists":"","espionage":""}],["avic heavy machinery company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC Heavy Machinery Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"juhang aviation technology shenzhen co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JUHANG AVIATION TECHNOLOGY SHENZHEN CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sinno electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SINNO ELECTRONICS CO.","kind":"LIMITED\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"reach holding group shanghai co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"REACH HOLDING GROUP SHANGHAI CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["guangzhou chiphome information technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"GUANGZHOU CHIPHOME INFORMATION TECHNOLOGY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sino machinery co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SINO MACHINERY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang oulong electric co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ZHEJIANG OULONG ELECTRIC CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"s&c trade pty co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"S&C TRADE PTY CO.","kind":"LTD\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sunway tech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SUNWAY TECH CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china mobile communications group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Mobile Communications Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chang an shipping & technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHANG AN SHIPPING & TECHNOLOGY","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hytera communications corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hytera Communications Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hongkong himark electron model limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HONGKONG HIMARK ELECTRON MODEL LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hong kong yayang trading limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HONG KONG YAYANG TRADING LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"new idea guangzhou technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"NEW IDEA GUANGZHOU TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing panda electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"NANJING PANDA ELECTRONICS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan xiaoruizhi science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WUHAN XIAORUIZHI SCIENCE AND TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan tongsheng technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WUHAN TONGSHENG TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"bochuang ceramic",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BOCHUANG CERAMIC","kind":"INC.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hanhong pharmaceutical technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HANHONG PHARMACEUTICAL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing lucheng weiye technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING LUCHENG WEIYE TECHNOLOGY DEVELOPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"united electronics group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"UNITED ELECTRONICS GROUP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hongyuan marine co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HONGYUAN MARINE CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["asia pacific links ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ASIA PACIFIC LINKS LTD.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"XINJIANG PUBLIC SECURITY BUREAU","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ningbo beilun saige machine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"NINGBO BEILUN SAIGE MACHINE CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jinhua hairun power technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JINHUA HAIRUN POWER TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai oceanen environmental science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHANGHAI OCEANEN ENVIRONMENTAL SCIENCE AND TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hk hengbangwei electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HK HENGBANGWEI ELECTRONICS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tas technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"TAS TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hebei crovell biotech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HEBEI CROVELL BIOTECH CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["syriss",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SYRISS","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen youxin technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN YOUXIN TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["robotronix semiconductors limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ROBOTRONIX SEMICONDUCTORS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["qidong hengcheng electronics factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"QIDONG HENGCHENG ELECTRONICS FACTORY","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen 5g high-tech innovation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN 5G HIGH-TECH INNOVATION CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing fagima electromechanical equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHONGQING FAGIMA ELECTROMECHANICAL EQUIPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"haokun energy group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HAOKUN ENERGY GROUP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"anyang forging press numerical control equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ANYANG FORGING PRESS NUMERICAL CONTROL EQUIPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guilin alpha rubber & plastics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"GUILIN ALPHA RUBBER & PLASTICS TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dandong zhicheng metallic material co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DANDONG ZHICHENG METALLIC MATERIAL CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["c&i semiconductors co limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"C&I SEMICONDUCTORS CO LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai north begins international",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SHANGHAI NORTH BEGINS INTERNATIONAL","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"t-rubber co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"T-RUBBER CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["success move ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SUCCESS MOVE LTD.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Communications Construction Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hengshui heshuo cellulose co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HENGSHUI HESHUO CELLULOSE CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"imaxchip technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"IMAXCHIP TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["ekt smart technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"EKT SMART TECHNOLOGY","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["duling technology hk limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"DULING TECHNOLOGY HK LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["star ocean shipmanage ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"STAR OCEAN SHIPMANAGE LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cssc offshore & marine engineering (group) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CSSC OFFSHORE & MARINE ENGINEERING (GROUP) CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongcheng heavy equipment defense technology shandong group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ZHONGCHENG HEAVY EQUIPMENT DEFENSE TECHNOLOGY SHANDONG GROUP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing shiny nights technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING SHINY NIGHTS TECHNOLOGY DEVELOPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"advantage trading co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ADVANTAGE TRADING CO.","kind":"LIMITED\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan shengyin cnc equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DONGGUAN SHENGYIN CNC EQUIPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hk cinty co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HK CINTY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang production and construction corps",{"riskRating":"MEDIUM","countryCode":"CN","institution":"XINJIANG PRODUCTION AND CONSTRUCTION CORPS","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"fujian torch electron technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Fujian Torch Electron Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace communications holdings group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AEROSPACE COMMUNICATIONS HOLDINGS GROUP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"corebai microelectronics beijing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"COREBAI MICROELECTRONICS BEIJING CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["lett tronic group limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"LETT TRONIC GROUP LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["rg solutions limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"RG SOLUTIONS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhonggu storage and transportation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ZHONGGU STORAGE AND TRANSPORTATION CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["dalian zhenghua maoyi youxian gongsi",{"riskRating":"MEDIUM","countryCode":"CN","institution":"DALIAN ZHENGHUA MAOYI YOUXIAN GONGSI","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china unicom (hong kong) limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Unicom (Hong Kong) Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shandong sea right petrochemical co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHANDONG SEA RIGHT PETROCHEMICAL CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aerosun corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aerosun Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an longde technology development company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"XI'AN LONGDE TECHNOLOGY DEVELOPMENT COMPANY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu keylink wireless technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CHENGDU KEYLINK WIRELESS TECHNOLOGY CO.","kind":"LTD\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen caspro technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHENZHEN CASPRO TECHNOLOGY CO.","kind":"LTD\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou a-one special alloy co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SUZHOU A-ONE SPECIAL ALLOY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"qingdao cemo technology develop co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"QINGDAO CEMO TECHNOLOGY DEVELOP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou ausay technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"GUANGZHOU AUSAY TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing timingtron corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BEIJING TIMINGTRON CORPORATION","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["poly technologies incorporated",{"riskRating":"MEDIUM","countryCode":"CN","institution":"POLY TECHNOLOGIES INCORPORATED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jinmingsheng technology hk co limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"JINMINGSHENG TECHNOLOGY HK CO LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["stars international ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"STARS INTERNATIONAL LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"fujie petrochemical zhoushan co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"FUJIE PETROCHEMICAL ZHOUSHAN CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing sanshunda electronics science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING SANSHUNDA ELECTRONICS SCIENCE AND TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dandong dongyuan industrial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DANDONG DONGYUAN INDUSTRIAL CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china marine information electronics company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Marine Information Electronics Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sanming sino-euro import and export co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SANMING SINO-EURO IMPORT AND EXPORT CO.","kind":"LTD\"","securityCredentials":"","endUserLists":"","espionage":""}],["gtlk asia limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"GTLK ASIA LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["grun group co limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"GRUN GROUP CO LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tordan industry limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"TORDAN INDUSTRY LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["avic aviation high-technology company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC Aviation High-Technology Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jinhu minsheng pharmaceutical machinery co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JINHU MINSHENG PHARMACEUTICAL MACHINERY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shvabe opto-electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHVABE OPTO-ELECTRONICS CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"panda electronics group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"PANDA ELECTRONICS GROUP CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["mile hao xiang technology co ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"MILE HAO XIANG TECHNOLOGY CO LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"kaifeng pingmei new carbon materials technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"KAIFENG PINGMEI NEW CARBON MATERIALS TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["superchip limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SUPERCHIP LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xingtai dong chuang new material technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"XINGTAI DONG CHUANG NEW MATERIAL TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["seibow logistics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SEIBOW LOGISTICS LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin micronanoelectronic manufacturing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"TIANJIN MICRONANOELECTRONIC MANUFACTURING TECHNOLOGY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"rofs microsystem (tianjin) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ROFS MICROSYSTEM (TIANJIN) CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["equipment development department",{"riskRating":"MEDIUM","countryCode":"CN","institution":"EQUIPMENT DEVELOPMENT DEPARTMENT","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhuhai zhenrong co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ZHUHAI ZHENRONG CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["finder technology ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"FINDER TECHNOLOGY LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan tianyu information industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WUHAN TIANYU INFORMATION INDUSTRY CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china communications construction co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Communications Construction Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["dji",{"riskRating":"MEDIUM","countryCode":"CN","institution":"DJI","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Radiation and Radiation Medicine\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing china aviation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing China Aviation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tyt electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"TYT Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"glite electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Glite Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"baimtec material co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Baimtec Material Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hetian haolin hair accessories co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hetian Haolin Hair Accessories Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chitron electronics company ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chitron Electronics Company Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avic aircraft co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AVIC Aircraft Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["8th academy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"8th Academy","kind":"CASC","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing sensetime technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Sensetime Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu jingxin technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Jingxin Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing synergy textiles co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing Synergy Textiles Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei meiling co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Meiling Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen cobber information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Cobber Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aksu huafu textiles co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aksu Huafu Textiles Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"liaoyang carbon co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Liaoyang Carbon Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aecc south industry company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AECC South Industry Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["semiconductor manufacturing south china corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Semiconductor Manufacturing South China Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["skyeye laser technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Skyeye Laser Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing geling shentong information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Geling Shentong Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"leon technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Leon Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai institute of microsystem and information technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Institute of Microsystem and Information Technology","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["\"kingford pcb electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Kingford PCB Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hetian taida apparel co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hetian Taida Apparel Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing tianhua",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Tianhua","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"taizhou cbm-future new material science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Taizhou CBM-Future New Material Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Basic Medicine\"","securityCredentials":"","endUserLists":"","espionage":""}],["sz energy technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SZ Energy Technology Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Bioengineering\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai breeze technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Breeze Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Hygiene and Environmental Medicine\"","securityCredentials":"","endUserLists":"","espionage":""}],["ktk group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"KTK Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu zongheng automation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Zongheng Automation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing luo luo technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BEIJING LUO LUO TECHNOLOGY DEVELOPMENT CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputing center shenzhen",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputing Center Shenzhen","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu gastone technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu GaStone Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu fine optical engineering research center",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Fine Optical Engineering Research Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["9th academy 771 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"9th Academy 771 Research Institute","kind":"CASC","securityCredentials":"","endUserLists":"","espionage":""}],["beijing university of aeronautics and astronautics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing University of Aeronautics and Astronautics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["megvii technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Megvii Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai ip3 information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai IP3 Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangdong munpower electronic commerce co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangdong Munpower Electronic Commerce Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["netposa",{"riskRating":"MEDIUM","countryCode":"CN","institution":"NetPosa","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Field Blood Transfusion Institution\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen iprogift technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Iprogift Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["baotou guanghua chemical industrial corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Baotou Guanghua Chemical Industrial Corporation","kind":"CNNC","securityCredentials":"","endUserLists":"","espionage":""}],["\"huayuanshitong technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huayuanshitong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china aerospace science and industry corporation second academy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Aerospace Science and Industry Corporation Second Academy","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["203rd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"203rd Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["china general nuclear power corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China General Nuclear Power Corporation","kind":"State-owned enterprise","securityCredentials":"","endUserLists":"","espionage":""}],["anhui bowei guangcheng information technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Anhui Bowei Guangcheng Information Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tanyuan technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tanyuan Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["smic holdings limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SMIC Holdings Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of computing technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Institute of Computing Technology","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["semiconductor manufacturing international (shenzhen) corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Semiconductor Manufacturing International (Shenzhen) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["aook technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AOOK Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["aecc south industry co. ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AECC South Industry Co. Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Health Service and Medical Information\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang daqo new energy co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang Daqo New Energy Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nuopuxun electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nuopuxun Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing aeronautical manufacturing technology research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Aeronautical Manufacturing Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["54th research institute of china",{"riskRating":"MEDIUM","countryCode":"CN","institution":"54th Research Institute of China","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wysh data systems",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"WYSH DATA SYSTEMS","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing skyrizon aviation industry investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Skyrizon Aviation Industry Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"e-chips solution co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"E-Chips Solution Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou tian-hai-xiang aviation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Tian-Hai-Xiang Aviation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["semiconductor manufacturing international (beijing) corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Semiconductor Manufacturing International (Beijing) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["academy of aerospace solid propulsion technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Academy of Aerospace Solid Propulsion Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"fushun jinly petrochemical carbon co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Fushun Jinly Petrochemical Carbon Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang production and construction corps public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xinjiang Production and Construction Corps Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["9th academy 772 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"9th Academy 772 Research Institute","kind":"CASC","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding group 722nd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Shipbuilding Group 722nd Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan haitian new technology group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Sichuan Haitian New Technology Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hefei national laboratory for physical sciences at microscale",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hefei National Laboratory for Physical Sciences at Microscale","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu latest electronics technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Latest Electronics Technology Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Military Veterinary Research Institute\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Toxicology and Pharmacology\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yangtze memory technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yangtze Memory Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["poly technologies inc.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Poly Technologies Inc.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xiamen meiya pico information co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xiamen Meiya Pico Information Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["seajet company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Seajet Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shuttle long co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SHUTTLE LONG CO.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china aerospace science and industry corporation (casic) 3rd academy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Aerospace Science and Industry Corporation (CASIC) 3rd Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["35th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"35th Research Institute","kind":"CASIC-3A","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai institute of applied physics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Institute of Applied Physics","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang foso electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Foso Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["oriental logistics group ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Oriental Logistics Group LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang gcl new energy material technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang GCL New Energy Material Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china jiuyuan trading corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Jiuyuan Trading Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an research institute of navigation technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xi'an Research Institute of Navigation Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"changji esquel textile co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Changji Esquel Textile Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["33rd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"33rd Research Institute","kind":"CASIC-3A","securityCredentials":"","endUserLists":"","espionage":""}],["shaanxi yingsaeir electronic technology co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shaanxi Yingsaeir Electronic Technology Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Disease Control and Prevention\"","securityCredentials":"","endUserLists":"","espionage":""}],["china aerospace science and technology corporation (casc) 8th academy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Aerospace Science and Technology Corporation (CASC) 8th Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["811 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"811 Research Institute","kind":"CASC-8A","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Microbiology and Epidemiology\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"smic northern integrated circuit manufacturing (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SMIC Northern Integrated Circuit Manufacturing (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan dingcheng material trade co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Sichuan Dingcheng Material Trade Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan zhonghe import and export trade co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Sichuan Zhonghe Import and Export Trade Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["semiconductor manufacturing international (tianjin) corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Semiconductor Manufacturing International (Tianjin) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["23rd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"23rd Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["northwest institute of nuclear technology in the science research",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Northwest Institute of Nuclear Technology in the Science Research","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang east hope nonferrous metals co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang East Hope Nonferrous Metals Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hoshine silicon industry (shanshan) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hoshine Silicon Industry (Shanshan) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aecc beijing institute of aeronautical materials",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AECC Beijing Institute of Aeronautical Materials","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing jincheng huanyu electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Jincheng Huanyu Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei bitland information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Bitland Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["31st research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"31st Research Institute","kind":"CASIC-3A","securityCredentials":"","endUserLists":"","espionage":""}],["changzhou utek composite company ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CHANGZHOU UTEK COMPOSITE COMPANY LTD","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china aerospace science and technology corporation (casc) 1st academy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Aerospace Science and Technology Corporation (CASC) 1st Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["702 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"702 Research Institute","kind":"CASIC-1A","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinghe xingyong carbon co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinghe Xingyong Carbon Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["peac institute of multiscale science",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Peac Institute of Multiscale Science","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"system equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"System Equipment Co.","kind":"Ltd. of the 28th Research Institute (Liyang)\"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang police college",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xinjiang Police College","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"academy of military medical sciences",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Academy of Military Medical Sciences","kind":"Institute of Medical Equipment\"","securityCredentials":"","endUserLists":"","espionage":""}],["poly asia pacific ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Poly Asia Pacific Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen shunjinxin import & export co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Shunjinxin Import & Export Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["key laboratory of information systems engineering",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Key Laboratory of Information Systems Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["southwest research institute of electronics technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Southwest Research Institute of Electronics Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["dalian ligong safety equipment company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Dalian Ligong Safety Equipment Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["boqur international ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Boqur International Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"lihang technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Lihang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"csic pride (nanjing) cryogenic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CSIC Pride (Nanjing) Cryogenic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hong kong energy technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hong Kong Energy Technology Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["envoltek",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Envoltek","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei training (dongguan) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Training (Dongguan) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yxs technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"YXS Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["avic research institute for special structures of aeronautical composites",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC Research Institute for Special Structures of Aeronautical Composites","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cambricon (kunshan) information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cambricon (Kunshan) Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Huawei Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 43rd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 43rd Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing anwise technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Anwise Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cambricon (nanjing) information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cambricon (Nanjing) Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"4paradigm technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"4Paradigm Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction company guangzhou waterway bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Communications Construction Company Guangzhou Waterway Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou centec communications co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Centec Communications Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou telecom electric plant co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Telecom Electric Plant Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["25th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"25th Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai cable offshore engineering co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Cable Offshore Engineering Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china aviation ind. std. parts",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Aviation Ind. Std. Parts","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["avtex semiconductor limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Avtex Semiconductor Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hongbo industrial technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hongbo Industrial Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aecc harbin dongan engine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AECC Harbin Dongan Engine Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["anhui yingliu hangyuan power",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Anhui Yingliu Hangyuan Power","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"harbin general aircraft industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Harbin General Aircraft Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu spaceon technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Spaceon Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["sunway microelectronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sunway Microelectronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou guangyou communications equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Guangyou Communications Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hmn international co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HMN International Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing bdstar navigation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing BDStar Navigation Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["283 factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"283 Factory","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen daotong intelligent aviation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Daotong Intelligent Aviation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["bgi research",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BGI Research","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei far east communication system engineering",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hebei Far East Communication System Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai aerospace science and technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Aerospace Science and Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi hyatech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuxi Hyatech Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"baoding shimaotong enterprises services co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Baoding Shimaotong Enterprises Services Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"haofeng industrial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Haofeng Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chongqing optel telecom",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chongqing Optel Telecom","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chang zhou jin tan teng yuan machinery parts co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chang Zhou Jin Tan Teng Yuan Machinery Parts Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china xinshidai company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Xinshidai Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guilin changhai development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guilin Changhai Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["north china integrated circuit corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"North China Integrated Circuit Corporation","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["solar way (hong kong) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Solar Way (Hong Kong) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"pnc systems (jiangsu) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"PNC Systems (Jiangsu) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou xinyan holdings co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Xinyan Holdings Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china communications construction company dredging group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Communications Construction Company Dredging Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hami municipality public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hami Municipality Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hsj electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HSJ Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen winthought tech",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shenzhen Winthought Tech","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jadeshine",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jadeshine","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["lightstar technology ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Lightstar Technology Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an aerospace huaxun technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xi'an Aerospace Huaxun Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan mailite communication co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Mailite Communication Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen bailiansheng electronic science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Bailiansheng Electronic Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen dongpengshang electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Dongpengshang Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["galaxy electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Galaxy Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cambricon (hong kong) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cambricon (Hong Kong) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aviation international corporation of china international simulation technology service co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Aviation International Corporation of China International Simulation Technology Service Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aecc china gas turbine establishment",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AECC China Gas Turbine Establishment","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"grg metrology & test (chongqing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"GRG Metrology & Test (Chongqing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu haiguang integrated circuit",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Haiguang Integrated Circuit","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin phytium information technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tianjin Phytium Information Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china volant industry",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Volant Industry","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xian aero-engine controls co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xian Aero-Engine Controls Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["718th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"718th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai aerospace equipment manufacturing",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Aerospace Equipment Manufacturing","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing sinonet science & technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Sinonet Science & Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aecc commercial aircraft engine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AECC Commercial Aircraft Engine Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aksu district public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aksu District Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an aerotek co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Aerotek Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan lvyuan industry investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Dongguan Lvyuan Industry Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang silk road bgi",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xinjiang Silk Road BGI","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen smartcom business co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Smartcom Business Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["armyfly",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Armyfly","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["710th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"710th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai aisinochip electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Aisinochip Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["avic international holding corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC International Holding Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["ehang international trade limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Ehang International Trade Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputing center wuxi",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputing Center Wuxi","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud beijing",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Beijing","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"moore thread intelligent technology (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Moore Thread Intelligent Technology (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing ruidakang technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Ruidakang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"3hc semiconductors (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"3HC Semiconductors (HK) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kindroid",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kindroid","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sinobright import and export company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sinobright Import and Export Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["zhongjie electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ZhongJie Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["asia international trading company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Asia International Trading Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["brilliance technology ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Brilliance Technology Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["208th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"208th Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["701st research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"701st Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou cambricon information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Cambricon Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yishang network (shenzhen) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yishang Network (Shenzhen) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"boson technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Boson Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"harbin chuangyue technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Harbin Chuangyue Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 55th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 55th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputing center changsha",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputing Center Changsha","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cetc cloud (beijing) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CETC Cloud (Beijing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["higon",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Higon","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china national scientific instruments and materials",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China National Scientific Instruments and Materials","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china electronics technology group corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Electronics Technology Group Corporation","kind":"30th Research Institute\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aif global logistics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AIF Global Logistics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["globe communication (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Globe Communication (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"anhui cambricon information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Anhui Cambricon Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["comtel technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Comtel Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["724th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"724th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing les information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing LES Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["is'vision",{"riskRating":"MEDIUM","countryCode":"CN","institution":"IS'Vision","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou tongguang communication technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Tongguang Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"CETC 7","endUserLists":"","espionage":""}],["\"furuida heilongjiang supply chain management co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Furuida Heilongjiang Supply Chain Management Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing guosheng electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing Guosheng Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sensenets",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SenseNets","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"peaceful vision (lianyungang) electronic co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Peaceful Vision (Lianyungang) Electronic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["sur-link international (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sur-Link International (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cst source industrial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CST Source Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["yogone electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yogone Electronics Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen institute of quantum science and engineering",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shenzhen Institute of Quantum Science and Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing unistrong science & technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing UniStrong Science & Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"urumqi haishi xin'an electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Urumqi Haishi Xin'an Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["changhe aircraft industries group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Changhe Aircraft Industries Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yusha group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yusha Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hisilicon technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HiSilicon Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei medicines health",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hebei Medicines Health","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["anhui bowei ruida electronics technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Anhui Bowei Ruida Electronics Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sun wing ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sun Wing Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin 764 communication and navigation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tianjin 764 Communication and Navigation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yibin sanjiang machine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yibin Sanjiang Machine Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kingv ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"KingV Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing fiberhome starrysky communication development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing FiberHome Starrysky Communication Development Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation no. 28 institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation No. 28 Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["207th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"207th Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["sharon yang",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sharon Yang","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing engineering institute of aircraft systems",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing Engineering Institute of Aircraft Systems","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["ecu electronic industrial",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ECU Electronic Industrial","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei poshing electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hebei Poshing Electronics","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["bayingolin mongolian autonomous prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Bayingolin Mongolian Autonomous Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an hengda microwave technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Hengda Microwave Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avic chengdu aircraft industrial (group) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AVIC Chengdu Aircraft Industrial (GROUP) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["jiangsu leidian technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jiangsu Leidian Technology Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"moore thread intelligent technology (chengdu) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Moore Thread Intelligent Technology (Chengdu) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technologies Co.","kind":"Ltd.","securityCredentials":"Beijing Research Institute\"","endUserLists":"Huawei","espionage":""}],["china electronics technology group corporation 14th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 14th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu tianyuan metal powder co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu Tianyuan Metal Powder Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["guangdong qinzhi technology research institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Guangdong Qinzhi Technology Research Institute Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei puxing electronic",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hebei Puxing Electronic","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin 764 avionics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tianjin 764 Avionics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing les cybersecurity and information technology research institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing LES Cybersecurity and Information Technology Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["peaktek company ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Peaktek Company Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["henan aerospace precision mach",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Henan Aerospace Precision Mach","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guizhou liyang intl manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guizhou Liyang Intl Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china general nuclear power group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China General Nuclear Power Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen avanlane",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shenzhen Avanlane","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["239 factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"239 Factory","kind":"CASIC-3A","securityCredentials":"","endUserLists":"","espionage":""}],["\"hafei aviation industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hafei Aviation Industry Co.","kind":"Ltd. (HAFEI)\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou huawei digital technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou Huawei Digital Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou zhongke microelectronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou Zhongke Microelectronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ningbo moof trading co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ningbo MOOF Trading Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"united microelectronics center co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"United Microelectronics Center Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cambricon (xi'an) integrated circuit co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cambricon (Xi'an) Integrated Circuit Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou huawei communication technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou Huawei Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["sj semiconductor",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SJ Semiconductor","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["rising logistics company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Rising Logistics Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["kenwoo international trade company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kenwoo International Trade Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technologies Co.","kind":"Ltd.","securityCredentials":"Material Characterization Lab\"","endUserLists":"Huawei","espionage":""}],["leadway technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Leadway Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei machine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Machine Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei marine networks co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Marine Networks Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"tianjin broadcasting equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tianjin Broadcasting Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["skytop electronics ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Skytop Electronics Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing liuhe bgi",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Liuhe BGI","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiatai aircraft equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiatai Aircraft Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu hengtong optic-electric co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu Hengtong Optic-Electric Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou hongyu technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Hongyu Technology Co.","kind":"Ltd.\"","securityCredentials":"CETC 7","endUserLists":"","espionage":""}],["\"huawei digital technologies (suzhou) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Digital Technologies (Suzhou) Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["cambricon technologies corporation limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Cambricon Technologies Corporation Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["699 factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"699 Factory","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technologies service co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technologies Service Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei sinopack electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hebei Sinopack Electronics","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["quantum science and technology yangtze river delta industrial innovation center",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Quantum Science and Technology Yangtze River Delta Industrial Innovation Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanxi hemu industrial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanxi Hemu Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china electronics technology group corporation electronic equipment group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Electronics Technology Group Corporation Electronic Equipment Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["second institute of oceanography",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Second Institute of Oceanography","kind":"MNR","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai high-performance integrated circuit design center",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai High-Performance Integrated Circuit Design Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction company second navigation engineering bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Communications Construction Company Second Navigation Engineering Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["yashen (hk) electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yashen (HK) Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu beizhan electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Beizhan Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai fengjin electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Fengjin Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["284 factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"284 Factory","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["hetian prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hetian Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin micro nano manufacturing",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tianjin Micro Nano Manufacturing","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huawei new technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huawei New Technology Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"huayi internet information service co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huayi Internet Information Service Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["mt microsystems",{"riskRating":"MEDIUM","countryCode":"CN","institution":"MT Microsystems","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing guobo electronic",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing Guobo Electronic","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cloudwalk technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CloudWalk Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hongtai electric ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hongtai Electric Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang kehua hechang biological science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang Kehua Hechang Biological Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["national research center for parallel computer engineering and technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Research Center for Parallel Computer Engineering and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"longtek company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Longtek Company","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["sanya highlander huanyu ocean information technology corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sanya Highlander Huanyu Ocean Information Technology Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou huawei investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Huawei Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai suowei information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Suowei Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shihezi municipality public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shihezi Municipality Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sansha highlander marine information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Sansha Highlander Marine Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing guang ming electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Guang Ming Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhengyuan chuangshi consulting co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Zhengyuan Chuangshi Consulting Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sitonholy (tianjin) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SITONHOLY (Tianjin) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"maxtronic international co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Maxtronic International Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud computing technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Computing Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sunway technology electronics ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sunway Technology Electronics Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chipwinone electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chipwinone Electronics Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan huiqun electronic co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Dongguan Huiqun Electronic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou new longshine information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou New Longshine Information Technology Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["at one electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"At One Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tonghui electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tonghui Electronics","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu haiguang microelectronics technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Haiguang Microelectronics Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai biren information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Biren Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing aixi information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing Aixi Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["fy international trading company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"FY International Trading Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen jingelang co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Jingelang Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china tech hi industry import and export corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Tech Hi Industry Import and Export Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 7th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 7th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tacheng prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tacheng Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["winthought company ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Winthought Company Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avic general aircraft huanan industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AVIC General Aircraft Huanan Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cetc chip technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CETC Chip Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cambricon jixingge (nanjing) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cambricon Jixingge (Nanjing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["tongfang nuctech technology ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tongfang NucTech Technology Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["750th test center",{"riskRating":"MEDIUM","countryCode":"CN","institution":"750th Test Center","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["fortune international trading",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Fortune International Trading","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["ninehead bird semiconductor",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Ninehead Bird Semiconductor","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jincheng group imp & exp. co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jincheng Group Imp & Exp. Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sumec instruments equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Sumec Instruments Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou bearing test & research center co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou Bearing Test & Research Center Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["avic leihua electronic technology research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC Leihua Electronic Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu poyotencon technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Poyotencon Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jet-prop international forwarding (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jet-Prop International Forwarding (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing biren technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Biren Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing aero lever precision ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Aero Lever Precision Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["korchina logistics (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Korchina Logistics (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"laboratory of toxicant analysis",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Laboratory of Toxicant Analysis","kind":"Institute of Pharmacology and Toxicology\"","securityCredentials":"","endUserLists":"","espionage":""}],["airpart consolidated trading",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Airpart Consolidated Trading","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"pxw semiconductor manufactory co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"PXW Semiconductor Manufactory Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["center for excellence in quantum information and quantum physics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Center for Excellence in Quantum Information and Quantum Physics","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu holy aviation science & tech",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Holy Aviation Science & Tech","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hangzhou huawei enterprises",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hangzhou Huawei Enterprises","kind":"Huawei","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing asset management co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing Asset Management Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hyper systems union limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hyper Systems Union Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["qihoo 360",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Qihoo 360","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tumushuke municipal public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tumushuke Municipal Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["scitech international express co. limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Scitech International Express Co. Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["winners global trading co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Winners Global Trading Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing j&a industry & trade co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing J&A Industry & Trade Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["aw industrial ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AW Industrial Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["universe market limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Universe Market Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an xr aero-components co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xi'an Xr Aero-Components Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["brilliance technology group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Brilliance Technology Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 58th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 58th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing aeronautics yangpu technology investment company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Aeronautics Yangpu Technology Investment Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["connec electronic ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Connec Electronic Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yixin science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yixin Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing colpak mechanical equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing colpak Mechanical Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["jiangxi hongdu aviation ind. group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jiangxi Hongdu Aviation Ind. Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["rofs microsystems",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ROFS Microsystems","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"voyage technology (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Voyage Technology (HK) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["boertala mongolian autonomous prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Boertala Mongolian Autonomous Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang academy of instrumentation science co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenyang Academy of Instrumentation Science Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an overland science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Overland Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"bada group hong kong corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Bada Group Hong Kong Corporation","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai nova instruments co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Nova Instruments Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan lingkong remote sensing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Dongguan Lingkong Remote Sensing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["159 factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"159 Factory","kind":"CASIC-3A","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang lianhai chuangzhi information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang Lianhai Chuangzhi Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chuangxinda electronics-tech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chuangxinda Electronics-Tech Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nano tech international co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nano Tech International Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["info rank technologies",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Info Rank Technologies","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["cast xi'an spaceflight engine factory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CAST Xi'an Spaceflight Engine Factory","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national satellite meteorological bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Satellite Meteorological Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi paike new mat. tech. co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuxi Paike New Mat. Tech. Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hong kong cheung wah electronics technology company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hong Kong Cheung Wah Electronics Technology Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai center for quantum science research",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Center for Quantum Science Research","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hubei guangxing communications technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hubei Guangxing Communications Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["laurel technologies co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Laurel Technologies Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["carry goldstar ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Carry Goldstar Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["world jetta (h.k.) logistics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"World Jetta (H.K.) Logistics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing cloudmind technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Cloudmind Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kelamayi municipality public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kelamayi Municipality Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["dandong nondestructive electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Dandong Nondestructive Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan hangte aviation tech. co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Sichuan Hangte Aviation Tech. Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei tech. investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Tech. Investment Co.","kind":"Huawei","securityCredentials":"","endUserLists":"","espionage":""}],["hunan goke microelectronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hunan Goke Microelectronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Huawei Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["brainware terahertz",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Brainware Terahertz","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technologies Co.","kind":"Ltd.","securityCredentials":"Xi'an Research Institute\"","endUserLists":"Huawei","espionage":""}],["china electronics technology group corporation 48th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 48th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hongxin technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hongxin Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["aispeed industry ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aispeed Industry Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen huawei technologies software",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shenzhen Huawei Technologies Software","kind":"Huawei","securityCredentials":"","endUserLists":"","espionage":""}],["\"multi-mart electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Multi-Mart Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan institute of biological products co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Institute of Biological Products Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"taiyuan eft equipment manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"TaiYuan EFT Equipment Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xuan qi technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xuan Qi Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tongfang r.i.a. co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tongfang R.I.A. Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud shanghai",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Shanghai","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["a.c. international",{"riskRating":"MEDIUM","countryCode":"CN","institution":"A.C. International","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an like innovative information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Like Innovative Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shandong sheenrun optics and electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shandong Sheenrun Optics and Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an xiangyu aviation technology group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xi'an Xiangyu Aviation Technology Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["705th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"705th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"jinan tongbaolai oilfield equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jinan Tongbaolai Oilfield Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hong kong engy technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hong Kong Engy Technology Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction company shanghai waterway bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Communications Construction Company Shanghai Waterway Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yutian haishi meitian electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yutian Haishi Meitian Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xinjiang uighur autonomous region people's government public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xinjiang Uighur Autonomous Region People's Government Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanxi eagles men aviation science and technology group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanxi Eagles Men Aviation Science and Technology Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 41st research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 41st Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cssc huangpu wenchong shipbuilding co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CSSC Huangpu Wenchong Shipbuilding Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi turbine blade co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuxi Turbine Blade Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["711th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"711th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"china nuclear power technology research institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Nuclear Power Technology Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai tianlang electronic science co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Tianlang Electronic Science Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang beidou tongchuang information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang Beidou Tongchuang Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"luopu haishi dingxin electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Luopu Haishi Dingxin Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an ruixin investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Ruixin Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hui tong business ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hui Tong Business Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["cssc electronic technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CSSC Electronic Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"fussion electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Fussion Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing e-science co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing E-science Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["703rd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"703rd Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["anhui bowei chang an electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Anhui Bowei Chang An Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huawei training school co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huawei Training School Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu day communication technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Day Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wulanchabu huawei cloud computing technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wulanchabu Huawei Cloud Computing Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"panda international information technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Panda International Information Technology Company","kind":"Ltd\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing iwintall technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Iwintall Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"bgi tech solutions (hongkong) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"BGI Tech Solutions (Hongkong) Co.","kind":"Ltd\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei software technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Software Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wynn electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wynn Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cssc xijiang shipbuilding co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CSSC Xijiang Shipbuilding Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["agcu scientech",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AGCU Scientech","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["intellifusion",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Intellifusion","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen xianhexin electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Xianhexin Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhongshang dingsheng mechanical and electrical equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Zhongshang Dingsheng Mechanical and Electrical Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou eric mechanics and electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Eric Mechanics and Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen hua'antai intelligent technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Hua'antai Intelligent Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avant science co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Avant Science Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["nanchang huawei communication technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanchang Huawei Communication Technology","kind":"Huawei","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huayi loan small loan co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huayi Loan Small Loan Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou xinwei transportation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Xinwei Transportation Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputing center guangzhou",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputing Center Guangzhou","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen bozhitongda technologic co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Bozhitongda Technologic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud shenzhen",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Shenzhen","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["yitu technologies",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yitu Technologies","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi reactor microelectronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shaanxi Reactor Microelectronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wavelet electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wavelet Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["surlink group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Surlink Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai mossel trade co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Mossel Trade Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["612 institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"612 Institute","kind":"AVIC","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai quantumctek co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai QuantumCTek Co.","kind":"LTD.\"","securityCredentials":"","endUserLists":"","espionage":""}],["702nd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"702nd Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["jiangsu hengtong marine cable systems co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jiangsu Hengtong Marine Cable Systems Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["micro electronic technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Micro Electronic Technology","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["\"hunan south general aviation engine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hunan South General Aviation Engine Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["systems engineering research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Systems Engineering Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["713th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"713th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["anhui sun-create electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Anhui Sun-Create Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["powersun electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Powersun Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technology Co.","kind":"Ltd. Hangzhou Research Institute\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"light cloud (hangzhou) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Light Cloud (Hangzhou) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["etc electronics ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ETC Electronics Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai integrated circuit research and development center",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Integrated Circuit Research and Development Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"azup international group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AZUP International Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"lianqi (hk) electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Lianqi (HK) Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi zhi en electromechanical technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shaanxi Zhi En Electromechanical Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hefei national laboratory for quantum information science",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hefei National Laboratory for Quantum Information Science","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["swelatel technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Swelatel Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hangzhou hikmicro sensing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hangzhou Hikmicro Sensing Technology Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["qing'an international trading group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Qing'an International Trading Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronic technology group corporation 11th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronic Technology Group Corporation 11th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing vision strategy technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Vision Strategy Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai supercomputing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Supercomputing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai aircraft manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Aircraft Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing les electronic equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing LES Electronic Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing shengbo xietong technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Shengbo Xietong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing siyuan electronic co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Siyuan Electronic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kunhai (yanjiao) innovation research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kunhai (Yanjiao) Innovation Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin tiandi weiye technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tianjin Tiandi Weiye Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"linkzol (beijing) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"LINKZOL (Beijing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai breeze technology jiangsu co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Breeze Technology Jiangsu Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["emax technology co ltd hk",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Emax Technology Co Ltd HK","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei device (dongguan) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Device (Dongguan) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"gaobeidian kaituo precise instrument co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Gaobeidian Kaituo Precise Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wuxi jiangnan institute of computing technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wuxi Jiangnan Institute of Computing Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai aoshi control technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Aoshi Control Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["204th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"204th Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhuhai biren integrated circuit co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhuhai Biren Integrated Circuit Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 36th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 36th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"north huawei communication technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"North Huawei Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["sur-link technology (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sur-Link Technology (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"telixin electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Telixin Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen yidian technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Yidian Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["yili kazakh autonomous prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yili Kazakh Autonomous Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china aviation development harbin bearing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"China Aviation Development Harbin Bearing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou biren integrated circuit co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Biren Integrated Circuit Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huawei terminal commercial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huawei Terminal Commercial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["206th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"206th Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["beijing opto-electronics technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Opto-Electronics Technology Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai huawei technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Huawei Technologies Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["lion chip electronics ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Lion Chip Electronics Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hefei core storage electronic ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hefei Core Storage Electronic Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["kezilesu kyrgyz autonomous prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kezilesu Kyrgyz Autonomous Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yongli electronic components (shenzhen) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yongli Electronic Components (Shenzhen) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["changji hui autonomous prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Changji Hui Autonomous Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongke xinliang (beijing) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhongke Xinliang (Beijing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["thundsea electric limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Thundsea Electric Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai micro electronics equipment (group) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Micro Electronics Equipment (Group) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["suntric company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Suntric Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["717th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"717th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["shandong yuehaitongxin keji ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shandong Yuehaitongxin Keji Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing nanjiang aerospace technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Nanjiang Aerospace Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ari international",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ARI International","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang huawei communications technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Huawei Communications Technology Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["china electronics technology group corporation 16th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 16th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu hnhb equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu HNHB Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing huawei digital technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Huawei Digital Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen legrit technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Legrit Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ceyear technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ceyear Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"moore thread intelligent technology (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Moore Thread Intelligent Technology (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["phonai electronics ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Phonai Electronics Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai hisilicon technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai HiSilicon Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wisdom import and export (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wisdom Import and Export (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wuhan ircen technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wuhan IRCEN Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cetc les information system group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"CETC LES Information System Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing huanjia telecommunication co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Huanjia Telecommunication Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["yield best international",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yield Best International","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technology Co.","kind":"Ltd. Chengdu Research Institute\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"changzhou guoguang data communications co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Changzhou Guoguang Data Communications Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou centec technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Centec Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["able supply chain limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Able Supply Chain Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"star tech aviation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Star Tech Aviation Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing ander tech. co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Ander Tech. Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["guizhou aviation tech. dev. nat.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Guizhou Aviation Tech. Dev. Nat.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huawei technical services co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huawei Technical Services Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"maipu communication technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Maipu Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai cambricon information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Cambricon Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["loongson technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Loongson Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zongyi superconductor technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zongyi Superconductor Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"eagles men aviation science and technology group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Eagles Men Aviation Science and Technology Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing fjr optoelectronic technology company ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing FJR Optoelectronic Technology Company Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei device (shenzhen) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Device (Shenzhen) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huaduan (anhui) machine tool manufacturer co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huaduan (Anhui) Machine Tool Manufacturer Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou taicheng shipbuilding industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Taicheng Shipbuilding Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ecom international (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"ECOM International (HK) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["712th research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"712th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["huisui zhang",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huisui Zhang","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["yunchip microelectronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yunchip Microelectronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan huawei investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Huawei Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kuang-chi group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kuang-Chi Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china national plant import/export co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China National Plant Import/Export Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongxin bada technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chongxin Bada Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"pishan haishi yong'an electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Pishan Haishi Yong'an Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing chuandong shipbuilding industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chongqing Chuandong Shipbuilding Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hk hengyu storage logistics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HK Hengyu Storage Logistics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["714th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"714th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["jadeshine engineering hk co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jadeshine Engineering HK Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jin yan technology & development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jin Yan Technology & Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hongkong delta electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hongkong Delta Electronics Technology Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["715th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"715th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["selective components ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Selective Components Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["707th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"707th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["toptech electronics ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Toptech Electronics Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen huawei technology service",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shenzhen Huawei Technology Service","kind":"Huawei","securityCredentials":"","endUserLists":"","espionage":""}],["xinnlinx electronics pte ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xinnlinx Electronics Pte Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["useta tech (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"USETA Tech (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang sailing information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang Sailing Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangxin shipbuilding and heavy industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangxin Shipbuilding and Heavy Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan huawei service co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Dongguan Huawei Service Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi aero electric co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shaanxi Aero Electric Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["kesina services",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kesina Services","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing institute of radio technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing Institute of Radio Technology","kind":"CETC 14","securityCredentials":"","endUserLists":"","espionage":""}],["key laboratory for quantum information",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Key Laboratory for Quantum Information","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["yiwu tianying optical instrument company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yiwu Tianying Optical Instrument Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"quantumctek co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"QuantumCTek Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["zhuhai orbita control systems",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Zhuhai Orbita Control Systems","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"new h3c semiconductor technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"New H3C Semiconductor Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"urumqi tianyao weiye information technology service co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Urumqi Tianyao Weiye Information Technology Service Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"toptics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Toptics","kind":"Inc.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"narpel technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Narpel Technology Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing transemic information technology ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Transemic Information Technology Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen speed industrial materials co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Speed Industrial Materials Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongtian technology submarine cable co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhongtian Technology Submarine Cable Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing huawei longshine information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Huawei Longshine Information Technology Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"hangzhou biren technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hangzhou Biren Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["daystar electric (hk) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Daystar Electric (HK) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jinnway data ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jinnway Data Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jiangsu meilong aviation components co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Jiangsu Meilong Aviation Components Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai shark sprite technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Shark Sprite Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aee shenzhen yidian aviation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AEE Shenzhen Yidian Aviation Technology Co.","kind":"Ltd\"","securityCredentials":"","endUserLists":"","espionage":""}],["qingdao national laboratory of marine science and technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Qingdao National Laboratory of Marine Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aecc shenyang liming aero engine co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AECC Shenyang Liming Aero Engine Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei mobile technology ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Mobile Technology Ltd.","kind":"Huawei","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu xiwu security system alliance co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Xiwu Security System Alliance Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["winninc electronic",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Winninc Electronic","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xian xae flying aviation manufacturing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xian Xae Flying Aviation Manufacturing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu huawei high-tech investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Huawei High-Tech Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ling ao electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ling Ao Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai biren intelligent technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Biren Intelligent Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["7th research academy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"7th Research Academy","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"guiyan new district huawei investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guiyan New District Huawei Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hefei ecu-tamura electric",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hefei ECU-TAMURA Electric","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aecc aviation power co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AECC Aviation Power Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei terminal (shenzhen) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Terminal (Shenzhen) Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"superburning semiconductor (nanjing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Superburning Semiconductor (Nanjing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"geovis technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"GEOVIS Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xiong'an cambricon technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xiong'an Cambricon Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["avic flight automatic control research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"AVIC Flight Automatic Control Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["709th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"709th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["zdas (hk) company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ZDAS (HK) Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["725th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"725th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["fiberhome technologies group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"FiberHome Technologies Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["second design department",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Second Design Department","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an zhongsheng shengyuan technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Zhongsheng Shengyuan Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["fly raise international limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Fly Raise International Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["wuxi institute of advanced technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wuxi Institute of Advanced Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huawei anjiexin electricity co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huawei Anjiexin Electricity Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["china electronics technology group corporation 45th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 45th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinjiang tangli technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinjiang Tangli Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"master-uni industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Master-Uni Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing machinery industry automation research institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Machinery Industry Automation Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"opturn co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Opturn Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["201 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"201 Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["elink electronic technology co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Elink Electronic Technology Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avic general aircraft zhejiang institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AVIC General Aircraft Zhejiang Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["e-chips technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"E-Chips Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"baoding giant import and export co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Baoding Giant Import and Export Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["zhengzhou baiwai intelligent automation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Zhengzhou Baiwai Intelligent Automation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hebei brightway international",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hebei Brightway International","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["shijiazhuang development zone maiteda microelectronics technology development and application corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shijiazhuang Development Zone Maiteda Microelectronics Technology Development and Application Corporation","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["newsuntech electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Newsuntech Electronics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["kashgar prefecture public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Kashgar Prefecture Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["bowei integrated circuits",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Bowei Integrated Circuits","kind":"CETC 13","securityCredentials":"","endUserLists":"","espionage":""}],["beijing 8-star international co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing 8-Star International Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["blueschip company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Blueschip Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hong kong haimao info-tec development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hong Kong Haimao Info-Tec Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputing center jinan",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputing Center Jinan","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["210th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"210th Research Institute","kind":"CASIC-2A","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an aircraft industrial company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xi'an Aircraft Industrial Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shaanxi hongyuan aviation forging",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shaanxi Hongyuan Aviation Forging","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei openlab suzhou",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei OpenLab Suzhou","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputing center tianjin",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputing Center Tianjin","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national supercomputer center zhengzhou",{"riskRating":"MEDIUM","countryCode":"CN","institution":"National Supercomputer Center Zhengzhou","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing jin sheng bo yue technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Jin Sheng Bo Yue Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["bop opto-electronics technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BOP Opto-Electronics Technology Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"stk electronics (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"STK Electronics (HK) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["harbin xinguang feitian",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Harbin Xinguang Feitian","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing sunsea industry corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing SunSea Industry Corporation","kind":"CETC 14","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai biren integrated circuit co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Biren Integrated Circuit Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china taly aviation technologies corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Taly Aviation Technologies Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"fujian jinhua integrated circuit company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Fujian Jinhua Integrated Circuit Company","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china communications construction company tianjin waterway bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Communications Construction Company Tianjin Waterway Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["gaohui hk electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Gaohui HK Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["central right investments ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Central Right Investments Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["corad technology (shenzhen) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Corad Technology (Shenzhen) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["highlander (hong kong) maritime navigation science and technology llc",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Highlander (Hong Kong) Maritime Navigation Science and Technology LLC","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"harbin yun li da technology and development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Harbin Yun Li Da Technology and Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing optel telecom technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chongqing Optel Telecom Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud dalian",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Dalian","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["760th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"760th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangdong dongling carbon tech. co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangdong Dongling Carbon Tech. Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen hisilicon technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen HiSilicon Technologies Co.","kind":"Electrical Research Center\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hengye technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hengye Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["government flying service",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Government Flying Service","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi aircaft industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shaanxi Aircaft Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud guiyang",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Guiyang","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 52nd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Electronics Technology Group Corporation 52nd Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huawei technical service co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huawei Technical Service Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["altay municipality public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Altay Municipality Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["719th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"719th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"hisilicon optoelectronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HiSilicon Optoelectronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["neditek",{"riskRating":"MEDIUM","countryCode":"CN","institution":"NEDITEK","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai haisi technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Haisi Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangxi xintuo enterprise co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangxi Xintuo Enterprise Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xac group aviation electronics import & export co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xac Group Aviation Electronics Import & Export Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"origin quantum computing technology (hefei) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Origin Quantum Computing Technology (Hefei) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hexin xingtong technology (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hexin Xingtong Technology (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hk p&w industry co. ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HK P&W Industry Co. Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi changling electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shaanxi Changling Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["huawei cloud guangzhou",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Huawei Cloud Guangzhou","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen rion technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shenzhen Rion Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["urumqi municipal public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Urumqi Municipal Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xaic tech (xi'an) industrial co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"XAIC Tech (Xi'an) Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"kyland technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Kyland Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["502 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"502 Research Institute","kind":"China Academy of Space Technology (CAST)","securityCredentials":"","endUserLists":"","espionage":""}],["704th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"704th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"moyu haishi electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Moyu Haishi Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["mtech industrial limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"MTech Industrial Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["fuhua precision man. co",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Fuhua Precision Man. Co","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing hifar technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing HiFar Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai aircraft design and research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Aircraft Design and Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ningbo huawei computer & net co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ningbo Huawei Computer & Net Co.","kind":"Ltd.\"","securityCredentials":"Huawei","endUserLists":"","espionage":""}],["\"shenzhen mingxinyuan co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Mingxinyuan Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongke xingtu space technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhongke Xingtu Space Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["cnooc limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"CNOOC Limited","kind":"CNOOC","securityCredentials":"","endUserLists":"","espionage":""}],["forensic genomics international",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Forensic Genomics International","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hisilicon tech (suzhou) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"HiSilicon Tech (Suzhou) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["723rd research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"723rd Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing tianhaida technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Tianhaida Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing ryan wende science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Ryan Wende Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wujiaqu municipality public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wujiaqu Municipality Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["513 research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"513 Research Institute","kind":"China Academy of Space Technology (CAST)","securityCredentials":"","endUserLists":"","espionage":""}],["wuxi beetech inc.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wuxi Beetech Inc.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sunton tech hong kong ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sunton Tech Hong Kong Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["12th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"12th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["suke logistics ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Suke Logistics Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"allparts trading co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Allparts Trading Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu hengxiang science and education equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu Hengxiang Science and Education Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aecc aero science & technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"AECC Aero Science & Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou hangxin aviation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Hangxin Aviation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang xizi aviation industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenyang Xizi Aviation Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing leike defense technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Leike Defense Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["turfan municipality public security bureau",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Turfan Municipality Public Security Bureau","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chinese flight test establishment",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chinese Flight Test Establishment","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou nuclear power research institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Nuclear Power Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xiang cheng gao trading (hk) ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Xiang Cheng Gao Trading (HK) Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["726th research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"726th Research Institute","kind":"CSSC","securityCredentials":"","endUserLists":"","espionage":""}],["beijing ti-tech science and technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Ti-Tech Science and Technology Development Co.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["ningbo semiconductor international corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Ningbo Semiconductor International Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan raycus fiber laser technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Raycus Fiber Laser Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china academy of electronics and information technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Academy of Electronics and Information Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen dji innovation technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen DJI Innovation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"smic hong kong international co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SMIC Hong Kong International Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu jouav automation tech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu JOUAV Automation Tech Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang dahua technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Dahua Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"smic northern integrated circuit manufacturing (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SMIC Northern Integrated Circuit Manufacturing (Beijing) Co.","kind":"Ltd\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"small leopard electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Small Leopard Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen dragonfly supply chain co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Dragonfly Supply Chain Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["l-tong electronic technology company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"L-Tong Electronic Technology Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen jiachuang weiye technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Jiachuang Weiye Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing moreget creative technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Moreget Creative Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["detail technology (hk) limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Detail Technology (HK) Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"avin electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Avin Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"kinglead electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Kinglead Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suntop semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suntop Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["sky rise technology ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Sky Rise Technology Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an semi electronic co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Semi Electronic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zone chips electronics hong kong co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zone Chips Electronics Hong Kong Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["planet technology",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Planet Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"onstar electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Onstar Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yutron technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yutron Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"rui en koo technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Rui En Koo Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["imaxchip",{"riskRating":"MEDIUM","countryCode":"CN","institution":"IMAXChip","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen one world international logistics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen One World International Logistics Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ace electronics (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ace Electronics (HK) Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["ucreate electronics group",{"riskRating":"MEDIUM","countryCode":"CN","institution":"UCreate Electronics Group","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"rayscience optoelectronics innovation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Rayscience Optoelectronics Innovation Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xin quan electronics hong kong co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xin Quan Electronics Hong Kong Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["insight electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Insight Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["bvi electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"BVI Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tenco technology company ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tenco Technology Company Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing lion heart international trading company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Lion Heart International Trading Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"mei xin electronic (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Mei Xin Electronic (HK) Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hong kong qisu electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hong Kong Qisu Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["midas lighting limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Midas Lighting Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hytera communications limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hytera Communications Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["ryx electronic (hk) limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"RYX Electronic (HK) Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cinty intl (hk) industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cinty Intl (HK) Industry Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["tengxuxing electronic technology hk limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tengxuxing Electronic Technology HK Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["minhoo logistics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Minhoo Logistics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hwa create",{"riskRating":"MEDIUM","countryCode":"CN","institution":"HWA Create","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hong kong yayang trading ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hong Kong Yayang Trading Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["megatek ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Megatek Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["pera global",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Pera Global","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cloudmax tech co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Cloudmax Tech Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing transemic technology ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Transemic Technology Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chipgoo electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chipgoo Electronics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["piraclinos limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Piraclinos Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["incomp limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Incomp Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"grun group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Grun Group Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"qianpu technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Qianpu Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["comsum technologies (group) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Comsum Technologies (Group) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["3-k electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"3-K Electronics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dgt technology (hk) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"DGT Technology (HK) Co.","kind":"Limited\"","securityCredentials":"","endUserLists":"","espionage":""}],["o-nice trading co. limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"O-Nice Trading Co. Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jcn (hk) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"JCN (HK) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["taihe electric (hong kong) limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Taihe Electric (Hong Kong) Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["zeyuan technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ZeYuan Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["mak logistics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"MAK Logistics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["wellgo international industrial limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wellgo International Industrial Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["yield bright industrial limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Yield Bright Industrial Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["icsole technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ICsole Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["eastech electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Eastech Electronics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"timi technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"TiMi Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen bz space technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen BZ Space Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hongkong inkson technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hongkong Inkson Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["foang tech inc.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Foang Tech Inc.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tiger force electronics limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tiger Force Electronics Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hong kong haiheng electronics co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hong Kong Haiheng Electronics Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["icsoso electronics co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ICSOSO Electronics Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing xuanyu intelligent technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Xuanyu Intelligent Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of fluid physics",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Fluid Physics","kind":"China Academy of Engineering Physics\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of mechanical manufacturing technology",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Mechanical Manufacturing Technology","kind":"China Academy of Engineering Physics\"","securityCredentials":"","endUserLists":"","espionage":""}],["the tenth research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The Tenth Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["general design institute of hubei academy of aerospace technology",{"riskRating":"HIGH","countryCode":"CN","institution":"General Design Institute of Hubei Academy of Aerospace Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["harbin institute of technology (weihai)",{"riskRating":"HIGH","countryCode":"CN","institution":"Harbin Institute of Technology (Weihai)","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["inner mongolia synthetic chemical research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Inner Mongolia Synthetic Chemical Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"weihai weigao electronic engineering co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Weihai Weigao Electronic Engineering Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang siasun robot automation co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenyang SIASUN Robot Automation Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an institute of aerospace precision mechatronics",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Institute of Aerospace Precision Mechatronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing hexie navigation technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Hexie Navigation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of systems engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Systems Engineering","kind":"Academy of Military Sciences","securityCredentials":"System Overall Research Institute\"","endUserLists":"","espionage":""}],["the 22nd research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 22nd Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the 28th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 28th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu zhongshi shunlang technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Zhongshi Shunlang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing aerospace vehicle overall design department",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Aerospace Vehicle Overall Design Department","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing beidou star navigation technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Beidou Star Navigation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing institute of electronic equipment",{"riskRating":"HIGH","countryCode":"CN","institution":"Nanjing Institute of Electronic Equipment","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing jinghang institute of computing and communication",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Jinghang Institute of Computing and Communication","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace new weather technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace New Weather Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["army aviation academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Aviation Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing netruida technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Netruida Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing qunling energy technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Qunling Energy Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing nanrui jibao engineering technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanjing Nanrui Jibao Engineering Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"changzhou borui electric power automation equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Changzhou Borui Electric Power Automation Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi shenda air conditioning equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuxi Shenda Air Conditioning Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shijiazhuang citek electronic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shijiazhuang Citek Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of remote sensing equipment",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Remote Sensing Equipment","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yantai haiyi energy technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Yantai Haiyi Energy Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhonghai technology development co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Zhonghai Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hebei huanchen technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hebei Huanchen Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"heilongjiang discovery robot co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Heilongjiang Discovery Robot Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai power energy storage battery system engineering technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Power Energy Storage Battery System Engineering Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing beibian microgrid technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Beibian Microgrid Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongshan hexin packaging co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhongshan Hexin Packaging Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai institute of precision metrology and testing",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Institute of Precision Metrology and Testing","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hunan xinhai co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hunan Xinhai Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi tonghua electromechanical co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shaanxi Tonghua Electromechanical Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of national defense engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of National Defense Engineering","kind":"Academy of Military Sciences of the Chinese People's Liberation Army\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing institute of water conservancy and hydrology automation",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanjing Institute of Water Conservancy and Hydrology Automation","kind":"Ministry of Water Resources\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing weiwan hengrui technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Weiwan Hengrui Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china ordnance industry new technology promotion research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Ordnance Industry New Technology Promotion Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhongbei innovation technology development co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Zhongbei Innovation Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing aerospace measurement and control technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Aerospace Measurement and Control Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hefei institute of physical sciences",{"riskRating":"HIGH","countryCode":"CN","institution":"Hefei Institute of Physical Sciences","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["southlake laboratory",{"riskRating":"HIGH","countryCode":"CN","institution":"Southlake Laboratory","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["kunshan jiuhua electronic equipment factory",{"riskRating":"HIGH","countryCode":"CN","institution":"Kunshan Jiuhua Electronic Equipment Factory","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen fengyun industrial co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenzhen Fengyun Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of ultra-high speed ​​aerodynamics",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Ultra-High Speed ​​Aerodynamics","kind":"China Aerodynamics Research and Development Center\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of aerospace technology",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Aerospace Technology","kind":"China Aerodynamic Research and Development Center\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"anfang hi-tech electromagnetic safety technology (beijing) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Anfang Hi-Tech Electromagnetic Safety Technology (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"star holdings group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Star Holdings Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi novi information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shaanxi Novi Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"victory technology (wuhan) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Victory Technology (Wuhan) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin golden fangyuan instrument co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Tianjin Golden Fangyuan Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing hejie electric co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Hejie Electric Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an aerospace tianhui data technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Aerospace Tianhui Data Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["east china institute of computing technology",{"riskRating":"HIGH","countryCode":"CN","institution":"East China Institute of Computing Technology","kind":"CETC 32","securityCredentials":"","endUserLists":"","espionage":""}],["the fifteenth research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The Fifteenth Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the 707th research institute of china shipbuilding industry corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 707th Research Institute of China Shipbuilding Industry Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an innovation port information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Innovation Port Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongke sanqing technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhongke Sanqing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhongke sanqing environmental technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Zhongke Sanqing Environmental Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an institute of surveying and mapping",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Institute of Surveying and Mapping","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["national satellite ocean application center",{"riskRating":"HIGH","countryCode":"CN","institution":"National Satellite Ocean Application Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china academy of water resources and hydropower research",{"riskRating":"HIGH","countryCode":"CN","institution":"China Academy of Water Resources and Hydropower Research","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu langrui cryogenic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Langrui Cryogenic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an yubo robot system technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Yubo Robot System Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai university of engineering and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai University of Engineering and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["he hai university",{"riskRating":"HIGH","countryCode":"CN","institution":"He Hai University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["jiangyin vocational and technical college",{"riskRating":"HIGH","countryCode":"CN","institution":"Jiangyin Vocational and Technical College","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing physical and chemical analysis and testing center",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Physical and Chemical Analysis and Testing Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing physical and chemical testing technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Physical and Chemical Testing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china meteorological administration wuhan rainstorm research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Meteorological Administration Wuhan Rainstorm Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the seventh research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The Seventh Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an industrial university",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Industrial University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an institute of optics and fine mechanics",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Institute of Optics and Fine Mechanics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of metal research",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Metal Research","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan air separation plant (group) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Sichuan Air Separation Plant (Group) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china electric apparatus research institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"China Electric Apparatus Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of aerospace experiment technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Aerospace Experiment Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an kuaizhou measurement and control technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Kuaizhou Measurement and Control Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china ordnance industry experimental and testing research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Ordnance Industry Experimental and Testing Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen zhongdian power technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenzhen Zhongdian Power Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai electric (group) corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Electric (Group) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai electric blower factory co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Electric Blower Factory Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["iron and steel research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Iron and Steel Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai electric heavy casting and forging co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Electric Heavy Casting and Forging Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai electric group shanghai electric machinery factory co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Electric Group Shanghai Electric Machinery Factory Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang petrochemical valve co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhejiang Petrochemical Valve Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"rongxin huike electric co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Rongxin Huike Electric Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"rongxin huike electric technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Rongxin Huike Electric Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu dinghong petroleum technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Dinghong Petroleum Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan sanyuan environmental governance co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Sichuan Sanyuan Environmental Governance Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing ingma instrument technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanjing Ingma Instrument Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["the health and epidemic prevention institute of the 63850th army of the chinese people's liberation army",{"riskRating":"HIGH","countryCode":"CN","institution":"The Health and Epidemic Prevention Institute of the 63850th Army of the Chinese People's Liberation Army","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"csic pengli (nanjing) atmospheric ocean information system co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CSIC Pengli (Nanjing) Atmospheric Ocean Information System Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china shipbuilding industry corporation nanjing pengli technology group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"China Shipbuilding Industry Corporation Nanjing Pengli Technology Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["the 54th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 54th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace hongtu information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace Hongtu Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hubei institute of aerospace chemical technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Hubei Institute of Aerospace Chemical Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing university of science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing University of Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangyu lifesaving equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hangyu Lifesaving Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["the 49th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 49th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["zhejiang university suzhou institute of industrial technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhejiang University Suzhou Institute of Industrial Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen taike feitian technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenzhen Taike Feitian Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen lvhang interstellar space technology research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Shenzhen Lvhang Interstellar Space Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen qianhai binghan information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenzhen Qianhai Binghan Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china shipbuilding industry group emergency warning and rescue equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"China Shipbuilding Industry Group Emergency Warning and Rescue Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of environmental characteristics",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Environmental Characteristics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing xingye dayuan technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Xingye Dayuan Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai institute of satellite engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Institute of Satellite Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the 27th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 27th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the 38th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 38th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china satellite navigation system management office",{"riskRating":"HIGH","countryCode":"CN","institution":"China Satellite Navigation System Management Office","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"henan weihua heavy machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Henan Weihua Heavy Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace star technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace Star Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou zhixun communication system co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Guangzhou Zhixun Communication System Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tongliao yilong technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Tongliao Yilong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai tongrong civil engineering technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Tongrong Civil Engineering Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"taiyuan rongsheng technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Taiyuan Rongsheng Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hengshui baijin composite material technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hengshui Baijin Composite Material Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china academy of aerospace systems science and engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"China Academy of Aerospace Systems Science and Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"faw jiefang automobile co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"FAW Jiefang Automobile Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongfeng off-road vehicle co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Dongfeng Off-Road Vehicle Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"golden monkey group weihai leather goods co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Golden Monkey Group Weihai Leather Goods Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing jialing quanyu motor vehicle co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chongqing Jialing Quanyu Motor Vehicle Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shenzhen electric company",{"riskRating":"HIGH","countryCode":"CN","institution":"Shenzhen Electric Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the eighteenth research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The Eighteenth Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanyang second machine vehicle manufacturing co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanyang Second Machine Vehicle Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou haige communication group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Guangzhou Haige Communication Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chinese people's liberation army armament academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese People's Liberation Army Armament Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china ordnance industry information center",{"riskRating":"HIGH","countryCode":"CN","institution":"China Ordnance Industry Information Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing liuhe huitong technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Liuhe Huitong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["air force academy science and technology innovation research center",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Academy Science and Technology Innovation Research Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu radio factory co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Radio Factory Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["state-owned no. 459 factory",{"riskRating":"HIGH","countryCode":"CN","institution":"State-owned No. 459 Factory","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing institute of technology reco electronic information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Institute of Technology Reco Electronic Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing fujirui optoelectronics technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Fujirui Optoelectronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu zongheng technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Zongheng Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan zhongyuan communication co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan Zhongyuan Communication Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei tongzhi electromechanical control technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hefei Tongzhi Electromechanical Control Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang shunyi technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenyang Shunyi Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yangzhou spark industrial co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Yangzhou Spark Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["north china vehicle research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"North China Vehicle Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china ordnance industry computer application technology research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Ordnance Industry Computer Application Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing yuanhua tianchuang technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Yuanhua Tianchuang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu aotewei electronic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Aotewei Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu autoway technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Autoway Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing gepu testing technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Gepu Testing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu liugong machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Liugong Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"bengbu shenzhou machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Bengbu Shenzhou Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cssc marine exploration technology research institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CSSC Marine Exploration Technology Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai jutong industrial co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Jutong Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi xingdi instrument co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuxi Xingdi Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang jiefang machinery manufacturing co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhejiang Jiefang Machinery Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhuhai yunzhou intelligent technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhuhai Yunzhou Intelligent Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhengzhou foguang power generation equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhengzhou Foguang Power Generation Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi haite machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuxi Haite Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of nuclear physics and chemistry",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Nuclear Physics and Chemistry","kind":"China Academy of Engineering Physics\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangtian sykes hydraulic co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Guangtian Sykes Hydraulic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an haorui electronic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Haorui Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suning county zhongyuan textile co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Suning County Zhongyuan Textile Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["army special medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Special Medical Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing jian'an instrument co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chongqing Jian'an Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"qingdao installation and construction co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Qingdao Installation and Construction Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang changbai electronic application equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenyang Changbai Electronic Application Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nantong yongyu antirust material co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nantong Yongyu Antirust Material Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hubei institute of technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Hubei Institute of Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu university of information engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Chengdu University of Information Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan altai display technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Dongguan Altai Display Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of electronic engineering",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Electronic Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sanxia university",{"riskRating":"HIGH","countryCode":"CN","institution":"Sanxia University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china ship science research center",{"riskRating":"HIGH","countryCode":"CN","institution":"China Ship Science Research Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhenjiang hanhai technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhenjiang Hanhai Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of applied electronics",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Applied Electronics","kind":"China Academy of Engineering Physics\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi tenn electronic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shaanxi Tenn Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"kaiyun lianchuang (beijing) technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Kaiyun Lianchuang (Beijing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding corporation system engineering research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Shipbuilding Corporation System Engineering Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["research institute of yantai harbin engineering university",{"riskRating":"HIGH","countryCode":"CN","institution":"Research Institute of Yantai Harbin Engineering University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongguan tianxiang aerospace technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Dongguan Tianxiang Aerospace Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["army armored forces academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Armored Forces Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the fourteenth research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The Fourteenth Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan yidian aviation technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Sichuan Yidian Aviation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["the 52nd research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 52nd Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of aerospace control instruments",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Aerospace Control Instruments","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["701 factory of the chinese people's liberation army navy",{"riskRating":"HIGH","countryCode":"CN","institution":"701 Factory of the Chinese People's Liberation Army Navy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chinese people's liberation army navy recruitment pilot student work office",{"riskRating":"HIGH","countryCode":"CN","institution":"Chinese People's Liberation Army Navy Recruitment Pilot Student Work Office","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing dingliang technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Dingliang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"lianyungang jereh soft technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Lianyungang Jereh Soft Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen shuangping power technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenzhen Shuangping Power Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang rubber research and design institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenyang Rubber Research and Design Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"steel research nanoco testing technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Steel Research Nanoco Testing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing industry university",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Industry University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"daqing qinglulangrun technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Daqing Qinglulangrun Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai yinai new material technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Yinai New Material Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china ordnance industry 213th research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Ordnance Industry 213th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhu shipyard co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhu Shipyard Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding industry corporation no. 711 research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Shipbuilding Industry Corporation No. 711 Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"qingdao dongfang marine high-tech equipment manufacturing co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Qingdao Dongfang Marine High-tech Equipment Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanxi ketai aerospace defense technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanxi Ketai Aerospace Defense Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing weilan jizhi technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Weilan Jizhi Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"dianke cloud (beijing) technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Dianke Cloud (Beijing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["the 30th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 30th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["central north university",{"riskRating":"HIGH","countryCode":"CN","institution":"Central North University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan one decibel technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan One Decibel Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan yuanhai borch technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan Yuanhai Borch Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of telemetry technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Telemetry Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace long march rocket technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace Long March Rocket Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan dafang environmental protection technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan Dafang Environmental Protection Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding corporation no. 719 research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Shipbuilding Corporation No. 719 Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang haiji nuclear biotechnology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhejiang Haiji Nuclear Biotechnology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china state shipbuilding corporation no. 708 research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China State Shipbuilding Corporation No. 708 Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhirui information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Zhirui Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu cyberspace science and technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Cyberspace Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing lefei aviation technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanjing Lefei Aviation Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["naval aeronautical engineering academy",{"riskRating":"HIGH","countryCode":"CN","institution":"Naval Aeronautical Engineering Academy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding corporation no. 708 research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Shipbuilding Corporation No. 708 Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an aibang electromagnetic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Aibang Electromagnetic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi jiuzhou remote sensing information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shaanxi Jiuzhou Remote Sensing Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["national marine technology center",{"riskRating":"HIGH","countryCode":"CN","institution":"National Marine Technology Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"gaode software co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Gaode Software Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["nautical chart information center of the naval staff department of the chinese people's liberation army",{"riskRating":"HIGH","countryCode":"CN","institution":"Nautical Chart Information Center of the Naval Staff Department of the Chinese People's Liberation Army","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing tianchuang honghe technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Tianchuang Honghe Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cetc (ningbo) marine electronics research institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CETC (Ningbo) Marine Electronics Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["the 20th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 20th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tongfang test technology (beijing) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Tongfang Test Technology (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing haizhiyuan technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Haizhiyuan Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing bohua anchuang technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Bohua Anchuang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china shipbuilding industry corporation no. 704 research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Shipbuilding Industry Corporation No. 704 Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"casic shenzhen (group) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CASIC Shenzhen (Group) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["jiujiang branch of no.707 research institute of china shipbuilding industry corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"Jiujiang Branch of No.707 Research Institute of China Shipbuilding Industry Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["liaoning institute of metrology",{"riskRating":"HIGH","countryCode":"CN","institution":"Liaoning Institute of Metrology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"liaoning huake petroleum equipment technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Liaoning Huake Petroleum Equipment Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"pathfinder holding group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Pathfinder Holding Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"qingdao tianyin textile technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Qingdao Tianyin Textile Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china national chemical corporation shuguang rubber industry research and design institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"China National Chemical Corporation Shuguang Rubber Industry Research and Design Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing simulation center",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Simulation Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["wuhan marine electric propulsion research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Wuhan Marine Electric Propulsion Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing kuidao technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanjing Kuidao Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing long march tianmin hi-tech co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Long March Tianmin Hi-Tech Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huaquality excellent productivity promotion (beijing) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Huaquality Excellent Productivity Promotion (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin jinhang computing technology research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Tianjin Jinhang Computing Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the 53rd research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 53rd Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guizhou aerospace tianma electromechanical technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Guizhou Aerospace Tianma Electromechanical Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin rongchuang air service equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Tianjin Rongchuang Air Service Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin jieqiang power equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Tianjin Jieqiang Power Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cm (luoyang) measurement and control co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CM (Luoyang) Measurement and Control Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan binhu electronics co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan Binhu Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongfan intelligent technology (shanghai) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhongfan Intelligent Technology (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chenggu pulse cutting equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chenggu Pulse Cutting Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xi'an aircraft design institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Xi'an Aircraft Design Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu shuzhilian technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Shuzhilian Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing naide industrial co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chongqing Naide Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an zhongke xingtu spatial data technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Zhongke Xingtu Spatial Data Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china aviation technology research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Aviation Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan kehua zhihui engineering technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Sichuan Kehua Zhihui Engineering Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["96607 military hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"96607 Military Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang dingli machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhejiang Dingli Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"citic heavy industries machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CITIC Heavy Industries Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangyin aifeide general machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangyin Aifeide General Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"china railway construction heavy industry group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"China Railway Construction Heavy Industry Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yangzhou taili special equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Yangzhou Taili Special Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu hengan police equipment manufacturing co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Hengan Police Equipment Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhongchuang zhike (mianyang) technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhongchuang Zhike (Mianyang) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace science and industry wuhan magnetoelectric co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace Science and Industry Wuhan Magnetoelectric Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing raytheon bofeng information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Raytheon Bofeng Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu hezheng special equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Hezheng Special Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai institute of radio equipment",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Institute of Radio Equipment","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"institute of radiation",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Institute of Radiation","kind":"China Academy of Testing Technology\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiaxing hongyu technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiaxing Hongyu Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["716th research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"716th Research Institute","kind":"CSIC","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing ruilihengan technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Ruilihengan Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"four creation electronics co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Four Creation Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cgn jiuyuan (chengdu) technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CGN Jiuyuan (Chengdu) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin uranus hydraulic machinery co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Tianjin Uranus Hydraulic Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ningbo shuxiang new material co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Ningbo Shuxiang New Material Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai rongke special equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Rongke Special Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hunan boxiang new material co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hunan Boxiang New Material Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"casic wuhan magnetoelectric co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CASIC Wuhan Magnetoelectric Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hengyang tellhow communication vehicle co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hengyang Tellhow Communication Vehicle Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace chenguang co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace Chenguang Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang deli equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhejiang Deli Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hunan aerospace electronics technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hunan Aerospace Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hubei aerospace long march equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hubei Aerospace Long March Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing yanshan electronic equipment factory",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Yanshan Electronic Equipment Factory","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["anhui optical fiber and cable transmission technology research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Anhui Optical Fiber and Cable Transmission Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen laifa lighting communication technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenzhen Laifa Lighting Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing xingtiantong telecommunications technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Xingtiantong Telecommunications Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"equipment design and testing technology institute",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Equipment Design and Testing Technology Institute","kind":"China Aerodynamic Research and Development Center\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hebei panshi pump industry co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hebei Panshi Pump Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang lushang technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shenyang Lushang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"eighth medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Eighth Medical Center","kind":"PLA General Hospital\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hebei hongdun new material technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hebei Hongdun New Material Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinxiang oriental industrial technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xinxiang Oriental Industrial Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hunan nafel new material technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hunan Nafel New Material Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing sushiweizhen technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Sushiweizhen Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu peak power co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chengdu Peak Power Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai puzhi information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanghai Puzhi Information Technology Co.","kind":"Ltd. Jiangxi Branch\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jinan mingao xincheng machinery equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jinan Mingao Xincheng Machinery Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace science and technology holding group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Aerospace Science and Technology Holding Group Co.","kind":"Ltd. Beijing Branch\"","securityCredentials":"","endUserLists":"","espionage":""}],["sichuan academy of fine arts",{"riskRating":"HIGH","countryCode":"CN","institution":"Sichuan Academy of Fine Arts","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["guangzhou civil defense command information guarantee center",{"riskRating":"HIGH","countryCode":"CN","institution":"Guangzhou Civil Defense Command Information Guarantee Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing kongwei communication technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Nanjing Kongwei Communication Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing aerospace guangtong technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Aerospace Guangtong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhongce zhihui technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Zhongce Zhihui Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jilin jiangji special industry co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jilin Jiangji Special Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"northern equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Northern Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["61699 army hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"61699 Army Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jihua 3502 business wear co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jihua 3502 Business Wear Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["academy of chinese people's armed police force",{"riskRating":"HIGH","countryCode":"CN","institution":"Academy of Chinese People's Armed Police Force","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan hemp biotechnology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan Hemp Biotechnology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing beista equipment technology development co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Beista Equipment Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hubei noble vacuum technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hubei Noble Vacuum Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu hongxu photoelectric technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Hongxu Photoelectric Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing runze jinsong technology development co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Runze Jinsong Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"li ning (china) sports goods co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Li Ning (China) Sports Goods Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu kangda nonwoven co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Kangda Nonwoven Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["63600 army hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"63600 Army Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of optoelectronic technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Optoelectronic Technology","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["the 39th research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"The 39th Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["63680 army hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"63680 Army Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhengzhou yaosheng environmental protection technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhengzhou Yaosheng Environmental Protection Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hunan satellite information technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hunan Satellite Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hainan univeristy",{"riskRating":"HIGH","countryCode":"CN","institution":"Hainan Univeristy","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"brilliance special vehicle equipment technology (dalian) co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Brilliance Special Vehicle Equipment Technology (Dalian) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou xiaguang technology research co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Guangzhou Xiaguang Technology Research Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanxi north xing'an chemical industry co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanxi North Xing'an Chemical Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of computer technology and application",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Institute of Computer Technology and Application","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["research and education center for data and communication protection",{"riskRating":"HIGH","countryCode":"CN","institution":"Research and Education Center for Data and Communication Protection","kind":"Chinese Academy of Sciences","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing tongci weiye sensing technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Tongci Weiye Sensing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huaxin consulting design and research institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Huaxin Consulting Design and Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan nuoyaxin technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Wuhan Nuoyaxin Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an junbiao electronic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Xi'an Junbiao Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["71352 army hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"71352 Army Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"sichuan haitian instrument electric development co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Sichuan Haitian Instrument Electric Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"cccc second navigation engineering bureau co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CCCC Second Navigation Engineering Bureau Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"fujian shangrun precision instrument co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Fujian Shangrun Precision Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["tenth research institute of china electronics technology group corporation",{"riskRating":"HIGH","countryCode":"CN","institution":"Tenth Research Institute of China Electronics Technology Group Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"crrc sifang vehicle co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CRRC Sifang Vehicle Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chongqing clp daewoo satellite application technology research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Chongqing CLP Daewoo Satellite Application Technology Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["92493 military hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"92493 Military Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 32nd research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Electronics Technology Group Corporation 32nd Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["china institute of metrology",{"riskRating":"HIGH","countryCode":"CN","institution":"China Institute of Metrology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing zhenxing institute of metrology and testing",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Zhenxing Institute of Metrology and Testing","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shandong tuohai marine technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shandong Tuohai Marine Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["93010 military hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"93010 Military Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing pufan protection technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Pufan Protection Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing bangwei hi-tech special textile co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Bangwei Hi-Tech Special Textile Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jihua group co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jihua Group Co.","kind":"Ltd. System Engineering Center\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhangjiagang siqi technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Zhangjiagang Siqi Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"changchun jihua 3504 industrial co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Changchun Jihua 3504 Industrial Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["china electronics technology group corporation 13th research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"China Electronics Technology Group Corporation 13th Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing maiteda electronic technology development co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Maiteda Electronic Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hangzhou university of electronic science and technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Hangzhou University of Electronic Science and Technology","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"big data (fujian) network technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Big Data (Fujian) Network Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu zhenan electric power equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Jiangsu Zhenan Electric Power Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hangzhou zoge communication equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Hangzhou Zoge Communication Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"anhui modern tv technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Anhui Modern TV Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing guhong technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Guhong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing zhence technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Chongqing Zhence Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"luoyang kaixun electronic technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Luoyang Kaixun Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"smic semiconductor manufacturing (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SMIC Semiconductor Manufacturing (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["maxtronic global limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"MAXTRONIC GLOBAL LIMITED","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun alloy manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Alloy Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shengmei semiconductor equipment wuxi co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shengmei Semiconductor Equipment Wuxi Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang shenqihang technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Shenqihang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing sevenstar flowmeter co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Sevenstar Flowmeter Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai lizhi technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Lizhi Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuxi Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou huada jiutian technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Huada Jiutian Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen pengxinxu technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Pengxinxu Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["hubei huachangda intelligent equipment company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Hubei Huachangda Intelligent Equipment Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hwa tsing (beijing) technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hwa Tsing (Beijing) Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guangzhou skyverse technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guangzhou Skyverse Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan yiguang technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Yiguang Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["ningbo nanda optoelectronic materials ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Ningbo Nanda Optoelectronic Materials Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhuhai cornerstone technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhuhai Cornerstone Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["equipment development department of the central military commission",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Equipment Development Department of the Central Military Commission","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing guowei integration technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Guowei Integration Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"oriental crystal microelectronics technology (qingdao) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Oriental Crystal Microelectronics Technology (Qingdao) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun purification system technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Purification System Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"piotech chuangyi (shenyang) semiconductor equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Piotech Chuangyi (Shenyang) Semiconductor Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"huafeng test & control technology (tianjin) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Huafeng Test & Control Technology (Tianjin) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai feiai technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Feiai Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"northern integrated circuit technology innovation center (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Northern Integrated Circuit Technology Innovation Center (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhijia semiconductor gas co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhijia Semiconductor Gas Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shengwei semiconductor equipment (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shengwei Semiconductor Equipment (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen xinkailai industrial machinery co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Xinkailai Industrial Machinery Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing huafeng test & control technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Huafeng Test & Control Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yusheng micro semiconductor (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yusheng Micro Semiconductor (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"swaysure technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"SwaySure Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai lingang kaishitong semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Lingang Kaishitong Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an huada jiutian technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Huada Jiutian Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai yuwei semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Yuwei Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing huada jiutianke technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing Huada Jiutianke Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei kaishitong semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Kaishitong Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["skyverse",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Skyverse","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["piotech",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Piotech","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zixi optical technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zixi Optical Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"yuwei semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Yuwei Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ulanqab nanda microelectronics materials co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ulanqab Nanda Microelectronics Materials Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing shuoke zhongkexin electronic equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Shuoke Zhongkexin Electronic Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai agm gas co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai AGM Gas Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen jingyuan information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Jingyuan Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen true price technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen True Price Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"changguang jizhi optical technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Changguang Jizhi Optical Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["si'en qingdao co. ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Si'En Qingdao Co. Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing zhongke xin electronic equipment",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Zhongke Xin Electronic Equipment","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"gui'an new district huawei investment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Gui'an New District Huawei Investment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xinlian rongchuang integrated circuit industry development (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xinlian Rongchuang Integrated Circuit Industry Development (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["zibo keyuanxin fluorine trading ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Zibo Keyuanxin Fluorine Trading Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai kaishitong semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Kaishitong Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu huada jiutianke technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Huada Jiutianke Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["zhiyi high purity electronic materials (shanghai) ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Zhiyi High Purity Electronic Materials (Shanghai) Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"piotech (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Piotech (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen guowei sensing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Guowei Sensing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei zhiwei semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Zhiwei Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuxi kaishitong technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuxi Kaishitong Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing e-town semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing E-Town Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["jac capital",{"riskRating":"MEDIUM","countryCode":"CN","institution":"JAC Capital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai xinsheng jingrui semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Xinsheng Jingrui Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen guoweichip technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Guoweichip Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["general technology limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"General Technology Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing luo luo tech development limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Luo Luo Tech Development Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tiger force electronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Tiger Force Electronics","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["foshan nanhai winhope trade company",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Foshan Nanhai Winhope Trade Company","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun precision manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Precision Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wingtech technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wingtech Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing naura semiconductor equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Naura Semiconductor Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun system integration co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun System Integration Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xiamen skyverse technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xiamen Skyverse Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen huada jiutianke technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Huada Jiutianke Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai integrated circuit equipment & materials industry innovation center co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Integrated Circuit Equipment & Materials Industry Innovation Center Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai jingce semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Jingce Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai skyverse semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Skyverse Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hwa tsing (shanghai) semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hwa Tsing (Shanghai) Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hwa tsing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hwa Tsing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei zhihui semiconductor application technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Zhihui Semiconductor Application Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun electronic technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Electronic Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing huafeng electronic equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Huafeng Electronic Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen zhangge instrument co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Zhangge Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chengdu skyverse technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chengdu Skyverse Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["zhangjiang laboratory",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Zhangjiang Laboratory","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang xinyuan micro business development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenyang Xinyuan Micro Business Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai growth international logistics ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Shanghai Growth International Logistics Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"naura technology group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Naura Technology Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai yanquan technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Yanquan Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hwa tsing (guangzhou) semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hwa Tsing (Guangzhou) Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai huada jiutian information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Huada Jiutian Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu qiwei semiconductor equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu Qiwei Semiconductor Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai nanpre mechanics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Nanpre Mechanics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing skyverse technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Skyverse Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wise road capital",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wise Road Capital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing aerospace hill test technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Aerospace Hill Test Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai xinsheng jinko semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Xinsheng Jinko Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou tiangong mechanics testing technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Tiangong Mechanics Testing Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun optoelectronic equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Optoelectronic Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shandong feiyuan gas co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shandong Feiyuan Gas Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing zhongdun security technology group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Zhongdun Security Technology Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["wuhan xinxin semiconductor manufacturing company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Wuhan Xinxin Semiconductor Manufacturing Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai modern advanced ultra-precision manufacturing center co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Modern Advanced Ultra-Precision Manufacturing Center Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of microelectronics",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Institute of Microelectronics","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["\"dandong mason-age trade co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Dandong Mason-Age Trade Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing guangke xintu technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Guangke Xintu Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["granpect co. ltd",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Granpect Co. Ltd","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu nata optoelectronic material co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu Nata Optoelectronic Material Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing jingyuan microelectronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Jingyuan Microelectronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanda optoelectronic semiconductor materials co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanda Optoelectronic Semiconductor Materials Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"piotech jianke (haining) semiconductor equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Piotech Jianke (Haining) Semiconductor Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou nanda optoelectronic materials co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Nanda Optoelectronic Materials Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai xinsheng semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Xinsheng Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["acm research",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ACM Research","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen qianhai skyverse semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Qianhai Skyverse Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["raintree scientific instruments (shanghai) corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Raintree Scientific Instruments (Shanghai) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai yuliangsheng technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Yuliangsheng Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"piotech (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Piotech (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"guowei group (shenzhen) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Guowei Group (Shenzhen) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai jingzhuo information technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Jingzhuo Information Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai siwave technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Siwave Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an longde technology development co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Longde Technology Development Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangsu zhichun system integration co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangsu Zhichun System Integration Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan skyverse semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Skyverse Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang zhichun precision manufacturing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Zhichun Precision Manufacturing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing huada jiutian technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Huada Jiutian Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"ruili microelectronics equipment (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Ruili Microelectronics Equipment (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhuhai skyverse technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhuhai Skyverse Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing kaishitong semiconductor co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Kaishitong Semiconductor Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing sevenstar integrated circuit equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Sevenstar Integrated Circuit Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai aipusi precision equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Aipusi Precision Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang uniview technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Uniview Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["smic advanced technology r&d (shanghai) corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"SMIC Advanced Technology R&D (Shanghai) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhiwei semiconductor (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhiwei Semiconductor (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"taiyuan jinke semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Taiyuan Jinke Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["woke trading h.k. limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Woke Trading H.K. Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"changsha zhichun application technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Changsha Zhichun Application Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"oriental crystal microelectronics technology (shanghai) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Oriental Crystal Microelectronics Technology (Shanghai) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen guowei hongbo technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen Guowei Hongbo Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["first design department",{"riskRating":"MEDIUM","countryCode":"CN","institution":"First Design Department","kind":"CASC-1A","securityCredentials":"","endUserLists":"","espionage":""}],["\"dongfang jingyuan electron co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Dongfang Jingyuan Electron Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["quanjiao nanda optoelectronic materials ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Quanjiao Nanda Optoelectronic Materials Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenyang xinyuan microelectronic equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenyang Xinyuan Microelectronic Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"wuhan naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Wuhan Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi'an naura microelectronics equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi'an Naura Microelectronics Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun precision gas co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Precision Gas Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"hefei zhiwei microelectronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Hefei Zhiwei Microelectronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shengmei semiconductor equipment (beijing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shengmei Semiconductor Equipment (Beijing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shenzhen sicarrier technologies co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shenzhen SiCarrier Technologies Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai xinsheng jingtou semiconductor technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Xinsheng Jingtou Semiconductor Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai zhichun semiconductor equipment co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Zhichun Semiconductor Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["shanghai radio equipment institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Shanghai Radio Equipment Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["sanya rehabilitation and convalescent center",{"riskRating":"HIGH","countryCode":"CN","institution":"Sanya Rehabilitation And Convalescent Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["900th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"900th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hainan hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Hainan Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing aikang yicheng medical equipment co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Aikang Yicheng Medical Equipment Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing weizhuo zhiyuan medical technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Weizhuo Zhiyuan Medical Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing libel bioengineering research institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Libel Bioengineering Research Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["xuanwu hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Xuanwu Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanxi jinsheng technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shanxi Jinsheng Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["904th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"904th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["980th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"980th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["923rd hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"923rd Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["920th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"920th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["901st hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"901st Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["960th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"960th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["924th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"924th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["989th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"989th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["909th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"909th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["903rd hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"903rd Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["964th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"964th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["988th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"988th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["926th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"926th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["928th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"928th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["922nd hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"922nd Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["987th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"987th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["921st hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"921st Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["967th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"967th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["the affiliated hospital of jiangnan university",{"riskRating":"HIGH","countryCode":"CN","institution":"The Affiliated Hospital of Jiangnan University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["institute of aviation medicine",{"riskRating":"HIGH","countryCode":"CN","institution":"Institute of Aviation Medicine","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["hainan climate center",{"riskRating":"HIGH","countryCode":"CN","institution":"Hainan Climate Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["freshwater fisheries research center",{"riskRating":"HIGH","countryCode":"CN","institution":"Freshwater Fisheries Research Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["tianjin institute of seawater desalination and multipurpose utilization",{"riskRating":"HIGH","countryCode":"CN","institution":"Tianjin Institute of Seawater Desalination and Multipurpose Utilization","kind":"Ministry of Natural Resources","securityCredentials":"","endUserLists":"","espionage":""}],["zhengzhou institute of multipurpose utilization of mineral resources",{"riskRating":"HIGH","countryCode":"CN","institution":"Zhengzhou Institute of Multipurpose Utilization of Mineral Resources","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["strategic warning institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Strategic Warning Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["dental hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Dental Hospital","kind":"Military","securityCredentials":"","endUserLists":"","espionage":""}],["eastern theater command general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Eastern Theater Command General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["health and epidemic prevention institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Health and Epidemic Prevention Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"First Medical Center","kind":"PLAGH","securityCredentials":"","endUserLists":"","espionage":""}],["national defense technology innovation institute",{"riskRating":"HIGH","countryCode":"CN","institution":"National Defense Technology Innovation Institute","kind":"AMS","securityCredentials":"","endUserLists":"","espionage":""}],["naval characteristic medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Naval Characteristic Medical Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["southern theater command general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Southern Theater Command General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["northern theater command general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Northern Theater Command General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["stomatological hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Stomatological Hospital","kind":"FMMU","securityCredentials":"","endUserLists":"","espionage":""}],["air-breathing hypersonic technology research center",{"riskRating":"HIGH","countryCode":"CN","institution":"Air-breathing Hypersonic Technology Research Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["175th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"175th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["military medical research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Military Medical Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["navy ship repair institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Navy Ship Repair Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["73rd army group hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"73rd Army Group Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["oil research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Oil Research Institute","kind":"General Logistics Department","securityCredentials":"","endUserLists":"","espionage":""}],["ninth hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Ninth Hospital","kind":"Joint Service Support Force","securityCredentials":"","endUserLists":"","espionage":""}],["sixth medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Sixth Medical Center","kind":"PLAGH","securityCredentials":"","endUserLists":"","espionage":""}],["beijing military region center for disease control and prevention",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Military Region Center for Disease Control and Prevention","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["south china institute of biomedicine",{"riskRating":"HIGH","countryCode":"CN","institution":"South China Institute of Biomedicine","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing qinglian baiao biotechnology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Qinglian Baiao Biotechnology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["guizhou medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"Guizhou Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["44th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"44th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shuguang rubber industry research and design institute co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Shuguang Rubber Industry Research and Design Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["59th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"59th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["159th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"159th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["military equipment research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Military Equipment Research Institute","kind":"General Logistics Department","securityCredentials":"","endUserLists":"","espionage":""}],["fifth medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Fifth Medical Center","kind":"PLAGH","securityCredentials":"","endUserLists":"","espionage":""}],["radar and electronic countermeasures research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Radar and Electronic Countermeasures Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["air force equipment research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Equipment Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing military region general hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"Beijing Military Region General Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["air force special medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Air Force Special Medical Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["971st hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"971st Hospital","kind":"PLAN","securityCredentials":"","endUserLists":"","espionage":""}],["military preventive medical college",{"riskRating":"HIGH","countryCode":"CN","institution":"Military Preventive Medical College","kind":"TMMU","securityCredentials":"","endUserLists":"","espionage":""}],["309th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"309th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing aerospace yisen wind tunnel engineering technology co.",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Beijing Aerospace Yisen Wind Tunnel Engineering Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["general hospital of xinjiang military region",{"riskRating":"HIGH","countryCode":"CN","institution":"General Hospital of Xinjiang Military Region","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["drug and instrument inspection institute of xinjiang military region",{"riskRating":"HIGH","countryCode":"CN","institution":"Drug and Instrument Inspection Institute of Xinjiang Military Region","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["458th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"458th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["first affiliated hospital of pla military medical university",{"riskRating":"HIGH","countryCode":"CN","institution":"First Affiliated Hospital of PLA Military Medical University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["411th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"411th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["97th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"97th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["eighth medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Eighth Medical Center","kind":"PLAGH","securityCredentials":"","endUserLists":"","espionage":""}],["302nd hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"302nd Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["958th hospital",{"riskRating":"HIGH","countryCode":"CN","institution":"958th Hospital","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["drug and instrument supervision and inspection center",{"riskRating":"HIGH","countryCode":"CN","institution":"Drug and Instrument Supervision and Inspection Center","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["second medical center",{"riskRating":"HIGH","countryCode":"CN","institution":"Second Medical Center","kind":"PLAGH","securityCredentials":"","endUserLists":"","espionage":""}],["southern theater command center for disease control and prevention",{"riskRating":"HIGH","countryCode":"CN","institution":"Southern Theater Command Center for Disease Control and Prevention","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"military veterinary research institute",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Military Veterinary Research Institute","kind":"Quartermaster University of PLA\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"military veterinary research",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Military Veterinary Research","kind":"PLA Quartermaster University\"","securityCredentials":"","endUserLists":"","espionage":""}],["pla quartermaster university",{"riskRating":"HIGH","countryCode":"CN","institution":"PLA Quartermaster University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["aeronautics computing technique research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Aeronautics Computing Technique Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"aerospace star technology application co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Aerospace Star Technology Application Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"anhui kehua sci-tech trading co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Anhui Kehua Sci-Tech Trading Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"associated opto-electronics (chongqing) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Associated Opto-electronics (Chongqing) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing foundfresh technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Foundfresh Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing graphene institute co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Graphene Institute Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing guoke tianxun technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Guoke Tianxun Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["chengdu aircraft design and research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chengdu Aircraft Design and Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing institute of precision mechatronics control equipment",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Institute of Precision Mechatronics Control Equipment","kind":"CALT","securityCredentials":"","endUserLists":"","espionage":""}],["china aeronautical radio electronics research institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"China Aeronautical Radio Electronics Research Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["chinese academy of sciences technology and engineering center for space utilization",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Chinese Academy of Sciences Technology and Engineering Center for Space Utilization","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"chongqing southwest integrated circuit design co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Chongqing Southwest Integrated Circuit Design Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"gyro technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Gyro Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"harbin aerospace star data system technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Harbin Aerospace Star Data System Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"jiangxi hongdu aviation industry group co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Jiangxi Hongdu Aviation Industry Group Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing chunhui technology industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing Chunhui Technology Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["nanjing fiberglass research and design institute",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Nanjing Fiberglass Research and Design Institute","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nanjing panda handa technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nanjing Panda Handa Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"national inspection and testing holding group nanjing national materials testing co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"National Inspection and Testing Holding Group Nanjing National Materials Testing Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["ningbo institute of materials technology and engineering",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Ningbo Institute of Materials Technology and Engineering","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["oricas import and export (beijing) corporation",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ORICAS Import and Export (Beijing) Corporation","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"physike technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Physike Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["scikro (hong kong) instruments limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Scikro (Hong Kong) Instruments Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"scikro (shanghai) instrument co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Scikro (Shanghai) Instrument Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shaanxi aerospace science and technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shaanxi Aerospace Science and Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"shanghai aviation electronic co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Shanghai Aviation Electronic Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["silk road trading company ltd.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Silk Road Trading Company Ltd.","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"singleton (suzhou) electronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Singleton (Suzhou) Electronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"space star technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Space Star Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["stratum ft limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Stratum FT Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou changfeng avionics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou Changfeng Avionics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suzhou sip hi-tech precision electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suzhou SIP Hi-Tech Precision Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"tianjin aerospace zhongwei data system technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Tianjin Aerospace Zhongwei Data System Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi’an aerospace automation co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi’an Aerospace Automation Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi’an aerospace tianhui data technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi’an Aerospace Tianhui Data Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi’an sunward aeromat co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi’an Sunward Aeromat Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi’an xiangteng microelectronics technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi’an Xiangteng Microelectronics Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"xi’an xiangxun technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Xi’an Xiangxun Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"zhejiang aerospace hengjia data technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Zhejiang Aerospace Hengjia Data Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["zibo topred international trading company limited",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Zibo Topred International Trading Company Limited","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["beijing academy of artificial intelligence",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Beijing Academy of Artificial Intelligence","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["\"beijing innovation wisdom technology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Beijing Innovation Wisdom Technology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"henan dingxin information industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Henan Dingxin Information Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"inspur (beijing) electronic information industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Inspur (Beijing) Electronic Information Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"inspur electronic information industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Inspur Electronic Information Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"inspur electronic information (hong kong) co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Inspur Electronic Information (Hong Kong) Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"inspur (hk) electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Inspur (HK) Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"inspur software co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Inspur Software Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"nettrix information industry co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Nettrix Information Industry Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suma techology co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suma Techology Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["\"suma-usi electronics co.",{"riskRating":"MEDIUM","countryCode":"CN","institution":"\"Suma-USI Electronics Co.","kind":"Ltd.\"","securityCredentials":"","endUserLists":"","espionage":""}],["army military transportation university",{"riskRating":"HIGH","countryCode":"CN","institution":"Army Military Transportation University","kind":"","securityCredentials":"","endUserLists":"","espionage":""}],["atr defense s&t key laboratory of intelligent information processing",{"riskRating":"MEDIUM","countryCode":"CN","institution":"ATR Defense S&T Key Laboratory of Intelligent Information Processing","kind":"SZU","securityCredentials":"","endUserLists":"","espionage":""}],["key laboratory of quantum information",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Key Laboratory of Quantum Information","kind":"CAS","securityCredentials":"","endUserLists":"","espionage":""}],["defense s&t key laboratory of antennas and microwave technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Defense S&T Key Laboratory of Antennas and Microwave Technology","kind":"Xidian University","securityCredentials":"","endUserLists":"","espionage":""}],["antenna institute",{"riskRating":"HIGH","countryCode":"CN","institution":"Antenna Institute","kind":"Xidian University","securityCredentials":"","endUserLists":"","espionage":""}],["defense s&t key laboratory of electronic measurement technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Defense S&T Key Laboratory of Electronic Measurement Technology","kind":"NUC","securityCredentials":"","endUserLists":"","espionage":""}],["defense s&t key laboratory of signal detection",{"riskRating":"HIGH","countryCode":"CN","institution":"Defense S&T Key Laboratory of Signal Detection","kind":"NUC","securityCredentials":"","endUserLists":"","espionage":""}],["state key laboratory for electronic measurement technology",{"riskRating":"HIGH","countryCode":"CN","institution":"State Key Laboratory for Electronic Measurement Technology","kind":"NUC","securityCredentials":"","endUserLists":"","espionage":""}],["\"ceti 41st ri key laboratory for electronic measurement technology\r\"",{"riskRating":"HIGH","countryCode":"CN","institution":"\"CETI 41st RI Key Laboratory for Electronic Measurement Technology\r\"","kind":"NUC","securityCredentials":"","endUserLists":"","espionage":""}],["defense s&t key laboratory of high-power semiconductor lasers",{"riskRating":"HIGH","countryCode":"CN","institution":"Defense S&T Key Laboratory of High-Power Semiconductor Lasers","kind":"CUST","securityCredentials":"","endUserLists":"","espionage":""}],["\"defense s&t key laboratory of lightweight",{"riskRating":"HIGH","countryCode":"CN","institution":"\"Defense S&T Key Laboratory of Lightweight","kind":"High-strength Structural Materials\"","securityCredentials":"CSU","endUserLists":"","espionage":""}],["defense s&t key laboratory of multi-spectral information processing technology",{"riskRating":"HIGH","countryCode":"CN","institution":"Defense S&T Key Laboratory of Multi-spectral Information Processing Technology","kind":"HUST","securityCredentials":"","endUserLists":"","espionage":""}],["defense s&t key laboratory of radar signal processing",{"riskRating":"HIGH","countryCode":"CN","institution":"Defense S&T Key Laboratory of Radar Signal Processing","kind":"Xidian University","securityCredentials":"","endUserLists":"","espionage":""}],["center for international security and strategy",{"riskRating":"MEDIUM","countryCode":"CN","institution":"Center for International Security and Strategy","kind":"Tsinghua University","securityCredentials":"","endUserLists":"","espionage":""}]]);

/**
 * Array of all CN FIG entries for fuzzy matching
 */
export const CN_FIGS_ARRAY: NormalizedCNFigEntry[] = [
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Academy of Military Science",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "academy of military science"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aero Engine Corporation of China",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "aero engine corporation of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Command College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force command college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Communication NCO Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force communication nco academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Early Warning Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force early warning academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Engineering University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "air force engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Flight Academy Shijiazhuang",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force flight academy shijiazhuang"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Harbin Flight Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force harbin flight academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Logistics University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force logistics university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Medical University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Research Institute",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Xi’an Flight Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "air force xi’an flight academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Academy of Armored Forces",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army academy of armored forces"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Academy of Artillery and Air Defense",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army academy of artillery and air defense"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Academy of Border and Coastal Defense",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army academy of border and coastal defense"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Aviation College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army aviation college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Engineering University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Infantry Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army infantry academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Medical University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Military Transportation Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army military transportation academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Research Institute",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Service Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army service academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Special Operations Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "army special operations academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aviation Industry Corporation of China",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "aviation industry corporation of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Aviation University of Air Force",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "aviation university of air force"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beihang University",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "beihang university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Technology",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "beijing institute of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Normal University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "beijing normal university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing University of Chemical Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "beijing university of chemical technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing University of Posts and Telecommunications",
    "kind": "Civilian",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "beijing university of posts and telecommunications"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Central South University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "central south university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Changchun University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "changchun university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Aerodynamics Research and Development Center",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "china aerodynamics research and development center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Aerospace Science and Industry Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "china aerospace science and industry corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Aerospace Science and Technology Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "china aerospace science and technology corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Agricultural University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "china agricultural university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Coast Guard Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "china coast guard academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "china electronics corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "china electronics technology group corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China National Nuclear Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "china national nuclear corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China North Industries Group",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "china north industries group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Shipbuilding Industry Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "china shipbuilding industry corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China South Industries Group",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "china south industries group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China State Shipbuilding Corporation",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "china state shipbuilding corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China University of Mining and Technology",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "china university of mining and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese Academy of Engineering Physics",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "chinese academy of engineering physics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "chongqing university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Dalian Naval Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "dalian naval academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Dalian University of Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "dalian university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "East China Normal University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "east china normal university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Engineering University of the CAPF",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "engineering university of the capf"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Fudan University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "fudan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Fuzhou University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "fuzhou university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guilin University of Electronic Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "guilin university of electronic science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hangzhou Dianzi University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "hangzhou dianzi university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hangzhou Normal University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "hangzhou normal university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Harbin Engineering University",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "harbin engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Harbin Institute of Technology",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "harbin institute of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hebei University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "hebei university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hefei University of Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "hefei university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Huazhong University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "huazhong university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hunan University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "hunan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Information Engineering University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "information engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of NBC Defense",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "institute of nbc defense"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jiangsu University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "jiangsu university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jilin University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "jilin university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Lanzhou University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "lanzhou university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Logistics University of the People’s Armed Police Force",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "logistics university of the people’s armed police force"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanchang Hangkong University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "nanchang hangkong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing Army Command College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "nanjing army command college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "nanjing university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing University of Aeronautics and Astronautics",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "nanjing university of aeronautics and astronautics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing University of Posts and Telecommunications",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "nanjing university of posts and telecommunications"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing University of Science and Technology",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "nanjing university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nankai University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "nankai university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Defense University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "national defense university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National University of Defense Technology",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "national university of defense technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Naval Command College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "naval command college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Naval Petty Officer Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "naval petty officer academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Naval Research Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "naval research academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Naval University of Engineering",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "naval university of engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Navy Aviation University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "navy aviation university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Navy Logistics Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "navy logistics academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Navy Medical University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "navy medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Navy Submarine Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "navy submarine academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "North China Institute of Aerospace Engineering",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "north china institute of aerospace engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "North China University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "north china university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "North University of China",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "north university of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Northwest Institute of Nuclear Technology",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "northwest institute of nuclear technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Northwestern Polytechnical University",
    "kind": "Seven Sons",
    "securityCredentials": "Top secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "northwestern polytechnical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Ocean University of China",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "ocean university of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Officers College of the PAP",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "officers college of the pap"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "PAP NCO College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "pap nco college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Peking University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "peking university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "People’s Armed Police Command College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "people’s armed police command college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Rocket Force Command College",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "rocket force command college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Rocket Force Research Institute",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "rocket force research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Rocket Force Sergeant School",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "rocket force sergeant school"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Rocket Force University of Engineering",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "rocket force university of engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shandong University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "shandong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Jiao Tong University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "shanghai jiao tong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "shanghai university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shenyang Aerospace University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "shenyang aerospace university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shenyang Ligong University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "shenyang ligong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sichuan University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "sichuan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southeast University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "southeast university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southern University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "southern university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southwest University of Science and Technology",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "southwest university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Space Engineering University",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "space engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Special Police Academy",
    "kind": "Military",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "special police academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sun Yat-sen University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "sun yat-sen university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tianjin Polytechnic University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "tianjin polytechnic university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tianjin University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "tianjin university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tongji University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "tongji university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tsinghua University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "tsinghua university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "University of Electronic Science and Technology of China",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "university of electronic science and technology of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "University of Science and Technology Beijing",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "university of science and technology beijing"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "University of Science and Technology of China",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "university of science and technology of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Wuhan University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "wuhan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xiamen University",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "xiamen university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xidian University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "xidian university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi’an Jiaotong University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "Yes",
    "normalizedName": "xi’an jiaotong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi’an University of Posts and Telecommunications",
    "kind": "Civilian",
    "securityCredentials": "None",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "xi’an university of posts and telecommunications"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Yanshan University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "None",
    "normalizedName": "yanshan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhejiang University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "None",
    "espionage": "Yes",
    "normalizedName": "zhejiang university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhengzhou University",
    "kind": "Civilian",
    "securityCredentials": "Secret",
    "endUserLists": "Yes",
    "espionage": "None",
    "normalizedName": "zhengzhou university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Jiaotong University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an jiaotong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Capital Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "capital medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southern Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southern medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "West China Hospital of Sichuan University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "west china hospital of sichuan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing University of Information Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing university of information science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jiangsu University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangsu university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhejiang University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhejiang university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hohai University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hohai university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing Forestry University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing forestry university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jiangnan University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangnan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southwest Jiaotong University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southwest jiaotong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Henan University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "henan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guangxi University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangxi university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Physics",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of physics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese PLA General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese pla general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"China University of Petroleum",
    "kind": "East China\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china university of petroleum"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Geographic Sciences and Natural Resources Research",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of geographic sciences and natural resources research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chang'an University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chang'an university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Affiliated Hospital of Zhengzhou University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first affiliated hospital of zhengzhou university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Atmospheric Physics",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of atmospheric physics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Taiyuan University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "taiyuan university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai University of Traditional Chinese Medicine",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai university of traditional chinese medicine"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sichuan Agricultural University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sichuan agricultural university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Automation",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of automation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhejiang Lab",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhejiang lab"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Aerospace Information Research Institute",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aerospace information research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Changsha University of Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changsha university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xuan Wu Hospital of the Capital Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xuan wu hospital of the capital medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Henan Agricultural University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "henan agricultural university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Biophysics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of biophysics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Metals Research",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of metals research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Second Military Medical University",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "second military medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Wenzhou University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wenzhou university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shaanxi University of Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shaanxi university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanfang Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanfang hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Ocean University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai ocean university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Applied Ecology",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of applied ecology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southwest Petroleum University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southwest petroleum university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "University of Jinan",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "university of jinan"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guilin University of Electronic Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guilin university of electronic technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guangxi Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangxi medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Astronomical Observatories",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national astronomical observatories"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Semiconductors",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of semiconductors"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Astronomical Observatory",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai astronomical observatory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BGI Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bgi group"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Jiliang University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china jiliang university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Ministry of Natural Resources",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ministry of natural resources"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Three Gorges University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china three gorges university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Mechanics",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of mechanics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Technologies",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei technologies"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Computational Science Research Center",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "beijing computational science research center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an University of Architecture and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an university of architecture and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Academy of Chinese Medical Sciences",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china academy of chinese medical sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese Academy of Geological Sciences",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese academy of geological sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Dalian Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dalian medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tianjin University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Space Science Center",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national space science center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Affiliated Hospital of GuangXi Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first affiliated hospital of guangxi medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Lanzhou Institute of Chemical Physics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "lanzhou institute of chemical physics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai University of Engineering Sciences",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai university of engineering sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Center for High Pressure Science and Technology Advanced Research",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "center for high pressure science and technology advanced research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Information Engineering",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of information engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tianjin University of Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Qingdao University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qingdao university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xijing Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xijing hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Earth Environment",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of earth environment"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese People's Liberation Army",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese people's liberation army"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese Academy of Fishery Sciences",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese academy of fishery sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xinjiang Institute of Ecology and Geography",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang institute of ecology and geography"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Affiliated Hospital of Anhui Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first affiliated hospital of anhui medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Software",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of software"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Academy of Military Medical Sciences",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "academy of military medical sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Changchun Institute of Optics",
    "kind": "Fine Mechanics and Physics\"",
    "securityCredentials": "Chinese Academy of Sciences",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changchun institute of optics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhujiang Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhujiang hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chengdu University of Information Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu university of information technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Pulmonary Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai pulmonary hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Institute of Water Resources and Hydropower Research",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china institute of water resources and hydropower research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Changhai Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changhai hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Geological Survey",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china geological survey"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "ShenZhen People’s Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen people’s hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Sport University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing sport university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hefei Institutes of Physical Science",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hefei institutes of physical science"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing Technology and Business University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing technology and business university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shandong Provincial Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shandong provincial hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Center for High Pressure Science & Technology Advanced Research",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "center for high pressure science & technology advanced research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xiamen University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xiamen university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "North China University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "north china university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Changzheng Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai changzheng hospital"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xi'an Technological University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an technological university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Institute of Optics and Fine Mechanics",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai institute of optics and fine mechanics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Qingdao National Laboratory for Marine Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qingdao national laboratory for marine science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Rock and Soil Mechanics",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of rock and soil mechanics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zunyi Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zunyi medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Institute of Oceanography",
    "kind": "Ministry of Natural Resources",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first institute of oceanography"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Institute of Optics and Precision Mechanics",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an institute of optics and precision mechanics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing Normal University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing normal university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Affiliated Hospital of Dalian Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first affiliated hospital of dalian medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Applied Physics and Computational Mathematics",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "institute of applied physics and computational mathematics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Electrical Engineering",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of electrical engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shenyang Institute of Automation",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "shenyang institute of automation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing Institute of Green and Intelligent Technology",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing institute of green and intelligent technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guilin Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guilin medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Anhui University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Proteome Research Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing proteome research center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing General Hospital of Nanjing Military Command",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing general hospital of nanjing military command"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China National Offshore Oil Corporation",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china national offshore oil corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Wuhan Institute of Physics and Mathematics",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuhan institute of physics and mathematics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Affiliated Hospital of Guizhou Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "affiliated hospital of guizhou medical university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Academy of Space Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china academy of space technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China National Chemical Corporation",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china national chemical corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Dalian University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dalian university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shenyang University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenyang university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shaanxi University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shaanxi university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guangxi University of Chinese Medicine",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangxi university of chinese medicine"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tang Du Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tang du hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Computer Network Information Center",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "computer network information center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Affiliated Hospital of Zunyi Medical College",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "affiliated hospital of zunyi medical college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Daping Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "daping hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Taihe Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "taihe hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Suzhou Institute of Biomedical Engineering and Technology",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "suzhou institute of biomedical engineering and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xiyuan Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xiyuan hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southwest Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southwest hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Petrochemical Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of petrochemical technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Affiliated Hospital of Jiangsu University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "affiliated hospital of jiangsu university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "PLA Army Engineering University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "pla army engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Institute of Metrology",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national institute of metrology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Academy of Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing academy of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Qingdao Institute of Marine Geology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qingdao institute of marine geology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Three Gorges Corporation",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china three gorges corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shandong Jiaotong University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shandong jiaotong university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jiujiang University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiujiang university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Academy of Quantum Information Sciences",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing academy of quantum information sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shangqiu Normal University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shangqiu normal university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Mobile",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china mobile"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The People's Hospital of Guangxi Zhuang Autonomous Region",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the people's hospital of guangxi zhuang autonomous region"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xinqiao Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinqiao hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xinjiang Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Changchun University of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changchun university of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Hospital of Lanzhou University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first hospital of lanzhou university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SenseTime",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sensetime"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Luoyang Institute of Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "luoyang institute of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Eastern Hepatobiliary Surgery Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "eastern hepatobiliary surgery hospital"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Academy of Launch Vehicle Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china academy of launch vehicle technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Hospital of Qinhuangdao",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first hospital of qinhuangdao"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhengzhou Normal University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhengzhou normal university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "General Hospital of Shenyang Military Region",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "general hospital of shenyang military region"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xinjiang Normal University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang normal university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CRRC",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "crrc"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Inspur",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "inspur"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wuhan Ship Development & Design Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuhan ship development & design institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force General Hospital PLA",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "air force general hospital pla"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Communications Construction Company",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction company"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tumor Hospital of Guangxi Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tumor hospital of guangxi medical university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Telecom",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china telecom"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Telecommunications Corporation",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china telecommunications corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing Academy of Animal Science",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing academy of animal science"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chengdu Military General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu military general hospital"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Microelectronics Technology Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing microelectronics technology institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China State Construction Engineering",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china state construction engineering"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Meteorological Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing meteorological bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Megvii",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "megvii"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Academy of Spaceflight Technology",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "",
    "endUserLists": "Yes",
    "espionage": "",
    "normalizedName": "shanghai academy of spaceflight technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ZTE",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zte"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China United Network Communications Group",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china united network communications group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Bejing Institute of Aeronautical Materials",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bejing institute of aeronautical materials"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "General Hospital of Guangzhou Military Command",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "general hospital of guangzhou military command"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Dà-Jiāng Innovations Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dà-jiāng innovations science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "302 Military Hospital of China",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "302 military hospital of china"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Fuzhou General Hospital of Nanjing Military Command",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fuzhou general hospital of nanjing military command"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Academy of Military Transportation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "academy of military transportation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sichuan Cancer Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sichuan cancer hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hebei Semiconductor Research Institute",
    "kind": "Defence industry conglomerate",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei semiconductor research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing Institute of Astronomical Optics & Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing institute of astronomical optics & technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "PLA 306 Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "pla 306 hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "PLA Air Force Aviation University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "pla air force aviation university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Railway Construction Corporation",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china railway construction corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Fiberhome Technology Group",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fiberhome technology group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jinan Institute of Quantum Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jinan institute of quantum technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hainan Branch of People's Liberation Army General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hainan branch of people's liberation army general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Kunming General Hospital of Chengdu Military Command",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kunming general hospital of chengdu military command"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CSSC Offshore & Marine Engineering Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "cssc offshore & marine engineering company"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Military General Hospital of Beijing PLA",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the military general hospital of beijing pla"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Information Technology Security Evaluation Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china information technology security evaluation center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Information Security Evaluation Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china information security evaluation center"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Delta Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "delta electronics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 180th Hospital of PLA",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 180th hospital of pla"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "303 Hospital of People's Liberation Army",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "303 hospital of people's liberation army"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Research Institute of Automation for Machinery Industry",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing research institute of automation for machinery industry"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Dahua Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dahua technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "iFlytek",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "iflytek"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "PLA Navy General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "pla navy general hospital"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BARGAWINE HONG KONG LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bargawine hong kong limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SZ DJI TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sz dji technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SINOTECH INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sinotech industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN JIASIBO TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen jiasibo technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "LIBERTY SHIPPING CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "liberty shipping co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ZHIHANG SHIP MANAGEMENT SHANGHAI CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhihang ship management shanghai co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CIELO MARITIME LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "cielo maritime ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AVIC Jonhon Optronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avic jonhon optronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "JINAN KEWEI OPTICS CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jinan kewei optics co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "MORNSUN GUANGZHOU SCIENCE AND TECHNOLOGY CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "mornsun guangzhou science and technology co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangxi Hongdu Aviation Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangxi hongdu aviation industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING JINGHUA QIDI ELECTRONIC TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing jinghua qidi electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHANDONG QIWANGWA PETROCHEMICAL CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shandong qiwangwa petrochemical co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DALIAN ZHONGCHUANG CHAR-WHITE CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dalian zhongchuang char-white co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHINA SHIPBUILDING INDUSTRY COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding industry company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"GUIZHOU SPACE APPLIANCE CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guizhou space appliance co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JIANGSU BANGDEYA NEW MATERIAL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu bangdeya new material technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China United Network Communications Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china united network communications group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SHAANXI ZHONGTIAN ROCKET TECHNOLOGY COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shaanxi zhongtian rocket technology company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AVIC XI'AN AIRCRAFT INDUSTRY GROUP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avic xi'an aircraft industry group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SHENZHEN JINGHON ELECTRONICS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen jinghon electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHANGSHA JINGJIA MICROELECTRONICS COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changsha jingjia microelectronics company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHENGDU JINGXIN TECHNOLOGY CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu jingxin technology co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHINA COMMUNICATIONS CONSTRUCTION GROUP LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction group limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"NORTH NAVIGATION CONTROL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"north navigation control technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WUHAN MAIWE COMMUNICATION CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan maiwe communication co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DAWNING INFORMATION INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dawning information industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"YANBIAN SILVERSTAR NETWORK TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yanbian silverstar network technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "TIANJIN CREATIVE SOURCE INTERNATIONAL TRADE CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin creative source international trade co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN SHENCHUANGHUI TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen shenchuanghui technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING HIGHLANDER DIGITAL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing highlander digital technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"NOVATEK CHINA HOLDINGS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"novatek china holdings co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhonghang Electronic Measuring Instruments Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhonghang electronic measuring instruments co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHINA SHIPBUILDING INDUSTRY GROUP POWER COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding industry group power company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING ALITE TECHNOLOGIES CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing alite technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ALLCHIPS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "allchips limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHONGQING ZONGSHEN AERO ENGINE MANUFACTURING CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing zongshen aero engine manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"RAYTRONIC CORPORATION",
    "kind": "LIMITED\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"raytronic corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Semiconductor Manufacturing International Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "semiconductor manufacturing international corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHINA SATELLITE COMMUNICATIONS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china satellite communications co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BEIJING SUKBAKSO",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing sukbakso"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN YASON GENERAL MACHINERY CO.",
    "kind": "LTD. NANCHANG BRANCH\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen yason general machinery co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"KING-PAI TECHNOLOGY HK CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"king-pai technology hk co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"GRANPECT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"granpect co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AGU INFORMATION TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"agu information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHINA HEAD AEROSPACE TECHNOLOGY COMPANY",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china head aerospace technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN CITY MEAN WELL ELECTRONICS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen city mean well electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SUZHOU XIAOLI PHARMATECH CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou xiaoli pharmatech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JINHOU INTERNATIONAL HOLDINGS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jinhou international holdings co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Costar Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"costar group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DANDONG HONGXIANG INDUSTRIAL DEVELOPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dandong hongxiang industrial development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ASIALINK SHANGHAI INTL LOGISTICS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"asialink shanghai intl logistics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN HUASHUO SEMICONDUCTOR CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huashuo semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HEBEI GUANLANG BIOTECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hebei guanlang biotechnology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"UU INNOVATION TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"uu innovation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHANGHAI TECHINITAL MATERIALS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai techinital materials co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HENAN JIAYUAN ALUMINIUM INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"henan jiayuan aluminium industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ABASCIENCE TECH CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"abascience tech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN HUASHENG INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huasheng industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SUZHOU ZHONGSHENG MAGNETIC INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou zhongsheng magnetic industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "YINKE HK ELECTRONICS COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yinke hk electronics company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHINA NUCLEAR ENGINEERING CORPORATION LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china nuclear engineering corporation limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHINA AEROSPACE TIMES ELECTRONICS CO.",
    "kind": "LTD\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china aerospace times electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING DEEPCOOL INDUSTRIES CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing deepcool industries co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "RUI EN KOO TECHNOLOGY CO LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "rui en koo technology co limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHANGSHA TIANYI SPACE SCIENCE AND TECHNOLOGY RESEARCH INSTITUTE CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changsha tianyi space science and technology research institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "EMC SUD LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "emc sud limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"KAIKAI TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"kaikai technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"IZZITION E-TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"izzition e-technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "YILUFA ELECTRONICS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yilufa electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WUHAN GLOBAL SENSOR TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan global sensor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "GUANGZHOU ALSHAHARI UNITED CORPORATION LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangzhou alshahari united corporation limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ARTTRONIX INTERNATIONAL HK LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "arttronix international hk limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Investment & Holding Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei investment & holding co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "XIN QUAN ELECTRONICS CO LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xin quan electronics co limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN RION TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen rion technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC Shenyang Aircraft Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic shenyang aircraft company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Inner Mongolia First Machinery Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"inner mongolia first machinery group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHANDONG OREE LASER TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shandong oree laser technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HANGZHOU KEMING INTELLIGENT TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou keming intelligent technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING YUNZE TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing yunze technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HUAWEI DEVICE CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei device co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou Hikvision Digital Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou hikvision digital technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ZHEJIANG ZHENHUAN CNC MACHINE TOOL CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang zhenhuan cnc machine tool co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "GKER LASER TECHNOLOGY CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "gker laser technology co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "RAYBEAM OPTRONICS CO. LTD.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "raybeam optronics co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING XINGHUA HENGCHENG TECHNOLOGY DEVELOPMENT CO.",
    "kind": "LTD. \"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing xinghua hengcheng technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "JOTRIN ELECTRONICS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jotrin electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangxi Mingzheng Intelligent Electrical Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangxi mingzheng intelligent electrical co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"FOSHAN GOLDEN AGE MOTOR TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"foshan golden age motor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHANGHAI JARRED INDUSTRIAL CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai jarred industrial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "LL ELECTRONIC LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ll electronic limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHINA SPACESAT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china spacesat co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHANG GUANG SATELLITE TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chang guang satellite technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "WARGOS INDUSTRY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wargos industry limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"YIDATONG TIANJIN METAL MATERIALS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yidatong tianjin metal materials co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SINOTECH DALIAN CARBON AND GRAPHITE MANUFACTURING CORPORATION",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sinotech dalian carbon and graphite manufacturing corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"KARAT INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"karat industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"QINSHENG PHARMACEUTICAL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"qinsheng pharmaceutical technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"YANTAI IRAY TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yantai iray technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WUHAN SHUOKANG BIOLOGICAL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan shuokang biological technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "DONGGUAN YUZE MACHINING TOOLS COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dongguan yuze machining tools company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Aerospace CH UAV Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace ch uav co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ANALOG TECHNOLOGY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "analog technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "GUANGDONG PRATIC CNC TECHNOLOGY CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangdong pratic cnc technology co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ANHUI GREATWALL MILITARY INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"anhui greatwall military industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ZHEJIANG QINGJI IND. CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang qingji ind. co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SILIBORN TECHNOLOGY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "siliborn technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JIANGXI LIANSHENG TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangxi liansheng technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"PENGLAI JUTAL OFFSHORE ENGINEERING HEAVY INDUSTRIES CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"penglai jutal offshore engineering heavy industries co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHINA AVIONICS SYSTEMS COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china avionics systems company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"YOULI TECHNOLOGY DEVELOPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"youli technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ACE ERA CO LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ace era co limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"YASON GENERAL MACHINERY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yason general machinery co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DALIAN SUN MOON STAR INTERNATIONAL LOGISTICS TRADING CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dalian sun moon star international logistics trading co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "KVANTEK LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kvantek limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HANGZHOU FUYANG KOTO MACHINERY CO.",
    "kind": "LTD\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou fuyang koto machinery co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC Heavy Machinery Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic heavy machinery company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JUHANG AVIATION TECHNOLOGY SHENZHEN CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"juhang aviation technology shenzhen co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SINNO ELECTRONICS CO.",
    "kind": "LIMITED\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sinno electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"REACH HOLDING GROUP SHANGHAI CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"reach holding group shanghai co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "GUANGZHOU CHIPHOME INFORMATION TECHNOLOGY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangzhou chiphome information technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SINO MACHINERY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sino machinery co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ZHEJIANG OULONG ELECTRIC CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang oulong electric co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"S&C TRADE PTY CO.",
    "kind": "LTD\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"s&c trade pty co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SUNWAY TECH CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sunway tech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Mobile Communications Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china mobile communications group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHANG AN SHIPPING & TECHNOLOGY",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chang an shipping & technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hytera Communications Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hytera communications corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HONGKONG HIMARK ELECTRON MODEL LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hongkong himark electron model limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HONG KONG YAYANG TRADING LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hong kong yayang trading limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"NEW IDEA GUANGZHOU TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"new idea guangzhou technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"NANJING PANDA ELECTRONICS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing panda electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WUHAN XIAORUIZHI SCIENCE AND TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan xiaoruizhi science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WUHAN TONGSHENG TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan tongsheng technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BOCHUANG CERAMIC",
    "kind": "INC.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"bochuang ceramic"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HANHONG PHARMACEUTICAL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hanhong pharmaceutical technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING LUCHENG WEIYE TECHNOLOGY DEVELOPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing lucheng weiye technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"UNITED ELECTRONICS GROUP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"united electronics group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HONGYUAN MARINE CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hongyuan marine co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ASIA PACIFIC LINKS LTD.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "asia pacific links ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "XINJIANG PUBLIC SECURITY BUREAU",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"NINGBO BEILUN SAIGE MACHINE CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ningbo beilun saige machine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JINHUA HAIRUN POWER TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jinhua hairun power technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHANGHAI OCEANEN ENVIRONMENTAL SCIENCE AND TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai oceanen environmental science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HK HENGBANGWEI ELECTRONICS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hk hengbangwei electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"TAS TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tas technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HEBEI CROVELL BIOTECH CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hebei crovell biotech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SYRISS",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "syriss"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN YOUXIN TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen youxin technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ROBOTRONIX SEMICONDUCTORS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "robotronix semiconductors limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "QIDONG HENGCHENG ELECTRONICS FACTORY",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qidong hengcheng electronics factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN 5G HIGH-TECH INNOVATION CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen 5g high-tech innovation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHONGQING FAGIMA ELECTROMECHANICAL EQUIPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing fagima electromechanical equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HAOKUN ENERGY GROUP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"haokun energy group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ANYANG FORGING PRESS NUMERICAL CONTROL EQUIPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"anyang forging press numerical control equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"GUILIN ALPHA RUBBER & PLASTICS TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guilin alpha rubber & plastics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DANDONG ZHICHENG METALLIC MATERIAL CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dandong zhicheng metallic material co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "C&I SEMICONDUCTORS CO LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "c&i semiconductors co limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SHANGHAI NORTH BEGINS INTERNATIONAL",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai north begins international"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"T-RUBBER CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"t-rubber co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SUCCESS MOVE LTD.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "success move ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Communications Construction Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HENGSHUI HESHUO CELLULOSE CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hengshui heshuo cellulose co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"IMAXCHIP TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"imaxchip technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "EKT SMART TECHNOLOGY",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ekt smart technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "DULING TECHNOLOGY HK LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "duling technology hk limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "STAR OCEAN SHIPMANAGE LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "star ocean shipmanage ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CSSC OFFSHORE & MARINE ENGINEERING (GROUP) CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cssc offshore & marine engineering (group) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ZHONGCHENG HEAVY EQUIPMENT DEFENSE TECHNOLOGY SHANDONG GROUP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongcheng heavy equipment defense technology shandong group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING SHINY NIGHTS TECHNOLOGY DEVELOPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing shiny nights technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ADVANTAGE TRADING CO.",
    "kind": "LIMITED\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"advantage trading co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DONGGUAN SHENGYIN CNC EQUIPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan shengyin cnc equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HK CINTY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hk cinty co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "XINJIANG PRODUCTION AND CONSTRUCTION CORPS",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang production and construction corps"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Fujian Torch Electron Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"fujian torch electron technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AEROSPACE COMMUNICATIONS HOLDINGS GROUP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace communications holdings group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"COREBAI MICROELECTRONICS BEIJING CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"corebai microelectronics beijing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "LETT TRONIC GROUP LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "lett tronic group limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "RG SOLUTIONS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "rg solutions limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ZHONGGU STORAGE AND TRANSPORTATION CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhonggu storage and transportation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "DALIAN ZHENGHUA MAOYI YOUXIAN GONGSI",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dalian zhenghua maoyi youxian gongsi"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Unicom (Hong Kong) Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china unicom (hong kong) limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHANDONG SEA RIGHT PETROCHEMICAL CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shandong sea right petrochemical co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aerosun Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aerosun corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "XI'AN LONGDE TECHNOLOGY DEVELOPMENT COMPANY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an longde technology development company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CHENGDU KEYLINK WIRELESS TECHNOLOGY CO.",
    "kind": "LTD\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu keylink wireless technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHENZHEN CASPRO TECHNOLOGY CO.",
    "kind": "LTD\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen caspro technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SUZHOU A-ONE SPECIAL ALLOY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou a-one special alloy co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"QINGDAO CEMO TECHNOLOGY DEVELOP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"qingdao cemo technology develop co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"GUANGZHOU AUSAY TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou ausay technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BEIJING TIMINGTRON CORPORATION",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing timingtron corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "POLY TECHNOLOGIES INCORPORATED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "poly technologies incorporated"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "JINMINGSHENG TECHNOLOGY HK CO LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jinmingsheng technology hk co limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "STARS INTERNATIONAL LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "stars international ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"FUJIE PETROCHEMICAL ZHOUSHAN CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"fujie petrochemical zhoushan co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING SANSHUNDA ELECTRONICS SCIENCE AND TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing sanshunda electronics science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DANDONG DONGYUAN INDUSTRIAL CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dandong dongyuan industrial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Marine Information Electronics Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china marine information electronics company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SANMING SINO-EURO IMPORT AND EXPORT CO.",
    "kind": "LTD\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sanming sino-euro import and export co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "GTLK ASIA LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "gtlk asia limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "GRUN GROUP CO LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "grun group co limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "TORDAN INDUSTRY LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tordan industry limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC Aviation High-Technology Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic aviation high-technology company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JINHU MINSHENG PHARMACEUTICAL MACHINERY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jinhu minsheng pharmaceutical machinery co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHVABE OPTO-ELECTRONICS CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shvabe opto-electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"PANDA ELECTRONICS GROUP CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"panda electronics group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "MILE HAO XIANG TECHNOLOGY CO LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "mile hao xiang technology co ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"KAIFENG PINGMEI NEW CARBON MATERIALS TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"kaifeng pingmei new carbon materials technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SUPERCHIP LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "superchip limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"XINGTAI DONG CHUANG NEW MATERIAL TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xingtai dong chuang new material technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SEIBOW LOGISTICS LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "seibow logistics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"TIANJIN MICRONANOELECTRONIC MANUFACTURING TECHNOLOGY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin micronanoelectronic manufacturing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ROFS MICROSYSTEM (TIANJIN) CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"rofs microsystem (tianjin) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "EQUIPMENT DEVELOPMENT DEPARTMENT",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "equipment development department"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ZHUHAI ZHENRONG CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhuhai zhenrong co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "FINDER TECHNOLOGY LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "finder technology ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WUHAN TIANYU INFORMATION INDUSTRY CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan tianyu information industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Communications Construction Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china communications construction co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "DJI",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dji"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Radiation and Radiation Medicine\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing China Aviation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing china aviation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"TYT Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tyt electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Glite Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"glite electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Baimtec Material Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"baimtec material co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hetian Haolin Hair Accessories Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hetian haolin hair accessories co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chitron Electronics Company Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chitron electronics company ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AVIC Aircraft Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avic aircraft co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "8th Academy",
    "kind": "CASC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "8th academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Sensetime Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing sensetime technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Jingxin Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu jingxin technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing Synergy Textiles Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing synergy textiles co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Meiling Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei meiling co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Cobber Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen cobber information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aksu Huafu Textiles Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aksu huafu textiles co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Liaoyang Carbon Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"liaoyang carbon co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AECC South Industry Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aecc south industry company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Semiconductor Manufacturing South China Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "semiconductor manufacturing south china corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Skyeye Laser Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "skyeye laser technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Geling Shentong Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing geling shentong information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Leon Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"leon technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Institute of Microsystem and Information Technology",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai institute of microsystem and information technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Kingford PCB Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"kingford pcb electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hetian Taida Apparel Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hetian taida apparel co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Tianhua",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing tianhua"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Taizhou CBM-Future New Material Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"taizhou cbm-future new material science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Basic Medicine\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SZ Energy Technology Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sz energy technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Bioengineering\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Breeze Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai breeze technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Hygiene and Environmental Medicine\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "KTK Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ktk group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Zongheng Automation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu zongheng automation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BEIJING LUO LUO TECHNOLOGY DEVELOPMENT CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing luo luo technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputing Center Shenzhen",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputing center shenzhen"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu GaStone Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu gastone technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Fine Optical Engineering Research Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu fine optical engineering research center"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "9th Academy 771 Research Institute",
    "kind": "CASC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "9th academy 771 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing University of Aeronautics and Astronautics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing university of aeronautics and astronautics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Megvii Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "megvii technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai IP3 Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai ip3 information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangdong Munpower Electronic Commerce Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangdong munpower electronic commerce co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "NetPosa",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "netposa"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Field Blood Transfusion Institution\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Iprogift Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen iprogift technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Baotou Guanghua Chemical Industrial Corporation",
    "kind": "CNNC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "baotou guanghua chemical industrial corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huayuanshitong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huayuanshitong technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Aerospace Science and Industry Corporation Second Academy",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aerospace science and industry corporation second academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "203rd Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "203rd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China General Nuclear Power Corporation",
    "kind": "State-owned enterprise",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china general nuclear power corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Anhui Bowei Guangcheng Information Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui bowei guangcheng information technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tanyuan Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tanyuan technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SMIC Holdings Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "smic holdings limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Institute of Computing Technology",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of computing technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Semiconductor Manufacturing International (Shenzhen) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "semiconductor manufacturing international (shenzhen) corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AOOK Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aook technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AECC South Industry Co. Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aecc south industry co. ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Health Service and Medical Information\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang Daqo New Energy Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang daqo new energy co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nuopuxun Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nuopuxun electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Aeronautical Manufacturing Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing aeronautical manufacturing technology research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "54th Research Institute of China",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "54th research institute of china"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"WYSH DATA SYSTEMS",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wysh data systems"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Skyrizon Aviation Industry Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing skyrizon aviation industry investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"E-Chips Solution Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"e-chips solution co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Tian-Hai-Xiang Aviation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou tian-hai-xiang aviation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Semiconductor Manufacturing International (Beijing) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "semiconductor manufacturing international (beijing) corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Academy of Aerospace Solid Propulsion Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "academy of aerospace solid propulsion technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Fushun Jinly Petrochemical Carbon Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"fushun jinly petrochemical carbon co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xinjiang Production and Construction Corps Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang production and construction corps public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "9th Academy 772 Research Institute",
    "kind": "CASC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "9th academy 772 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Shipbuilding Group 722nd Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding group 722nd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Sichuan Haitian New Technology Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan haitian new technology group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hefei National Laboratory for Physical Sciences at Microscale",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hefei national laboratory for physical sciences at microscale"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Latest Electronics Technology Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu latest electronics technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Military Veterinary Research Institute\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Toxicology and Pharmacology\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yangtze Memory Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yangtze memory technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Poly Technologies Inc.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "poly technologies inc."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xiamen Meiya Pico Information Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xiamen meiya pico information co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Seajet Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "seajet company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SHUTTLE LONG CO.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shuttle long co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Aerospace Science and Industry Corporation (CASIC) 3rd Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aerospace science and industry corporation (casic) 3rd academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "35th Research Institute",
    "kind": "CASIC-3A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "35th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Institute of Applied Physics",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai institute of applied physics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Foso Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang foso electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Oriental Logistics Group LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "oriental logistics group ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang GCL New Energy Material Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang gcl new energy material technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Jiuyuan Trading Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china jiuyuan trading corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xi'an Research Institute of Navigation Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an research institute of navigation technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Changji Esquel Textile Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changji esquel textile co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "33rd Research Institute",
    "kind": "CASIC-3A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "33rd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shaanxi Yingsaeir Electronic Technology Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shaanxi yingsaeir electronic technology co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Disease Control and Prevention\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Aerospace Science and Technology Corporation (CASC) 8th Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aerospace science and technology corporation (casc) 8th academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "811 Research Institute",
    "kind": "CASC-8A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "811 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Microbiology and Epidemiology\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SMIC Northern Integrated Circuit Manufacturing (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"smic northern integrated circuit manufacturing (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Sichuan Dingcheng Material Trade Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan dingcheng material trade co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Sichuan Zhonghe Import and Export Trade Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan zhonghe import and export trade co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Semiconductor Manufacturing International (Tianjin) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "semiconductor manufacturing international (tianjin) corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "23rd Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "23rd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Northwest Institute of Nuclear Technology in the Science Research",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "northwest institute of nuclear technology in the science research"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang East Hope Nonferrous Metals Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang east hope nonferrous metals co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hoshine Silicon Industry (Shanshan) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hoshine silicon industry (shanshan) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AECC Beijing Institute of Aeronautical Materials",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aecc beijing institute of aeronautical materials"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Jincheng Huanyu Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing jincheng huanyu electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Bitland Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei bitland information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "31st Research Institute",
    "kind": "CASIC-3A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "31st research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CHANGZHOU UTEK COMPOSITE COMPANY LTD",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changzhou utek composite company ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Aerospace Science and Technology Corporation (CASC) 1st Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aerospace science and technology corporation (casc) 1st academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "702 Research Institute",
    "kind": "CASIC-1A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "702 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinghe Xingyong Carbon Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinghe xingyong carbon co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Peac Institute of Multiscale Science",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "peac institute of multiscale science"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"System Equipment Co.",
    "kind": "Ltd. of the 28th Research Institute (Liyang)\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"system equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xinjiang Police College",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang police college"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Academy of Military Medical Sciences",
    "kind": "Institute of Medical Equipment\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"academy of military medical sciences"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Poly Asia Pacific Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "poly asia pacific ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Shunjinxin Import & Export Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen shunjinxin import & export co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Key Laboratory of Information Systems Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "key laboratory of information systems engineering"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Southwest Research Institute of Electronics Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southwest research institute of electronics technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Dalian Ligong Safety Equipment Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dalian ligong safety equipment company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Boqur International Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "boqur international ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Lihang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"lihang technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CSIC Pride (Nanjing) Cryogenic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"csic pride (nanjing) cryogenic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hong Kong Energy Technology Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hong kong energy technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Envoltek",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "envoltek"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Training (Dongguan) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei training (dongguan) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"YXS Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yxs technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC Research Institute for Special Structures of Aeronautical Composites",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic research institute for special structures of aeronautical composites"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cambricon (Kunshan) Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cambricon (kunshan) information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Huawei Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 43rd Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 43rd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Anwise Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing anwise technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cambricon (Nanjing) Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cambricon (nanjing) information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"4Paradigm Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"4paradigm technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Communications Construction Company Guangzhou Waterway Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction company guangzhou waterway bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Centec Communications Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou centec communications co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Telecom Electric Plant Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou telecom electric plant co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "25th Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "25th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Cable Offshore Engineering Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai cable offshore engineering co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Aviation Ind. Std. Parts",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aviation ind. std. parts"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Avtex Semiconductor Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avtex semiconductor limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hongbo Industrial Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hongbo industrial technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AECC Harbin Dongan Engine Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aecc harbin dongan engine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Anhui Yingliu Hangyuan Power",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui yingliu hangyuan power"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Harbin General Aircraft Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"harbin general aircraft industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Spaceon Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu spaceon technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sunway Microelectronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sunway microelectronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Guangyou Communications Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou guangyou communications equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HMN International Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hmn international co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing BDStar Navigation Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing bdstar navigation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "283 Factory",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "283 factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Daotong Intelligent Aviation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen daotong intelligent aviation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BGI Research",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bgi research"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hebei Far East Communication System Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei far east communication system engineering"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Aerospace Science and Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai aerospace science and technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuxi Hyatech Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi hyatech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Baoding Shimaotong Enterprises Services Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"baoding shimaotong enterprises services co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Haofeng Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"haofeng industrial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chongqing Optel Telecom",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing optel telecom"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chang Zhou Jin Tan Teng Yuan Machinery Parts Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chang zhou jin tan teng yuan machinery parts co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Xinshidai Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china xinshidai company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guilin Changhai Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guilin changhai development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "North China Integrated Circuit Corporation",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "north china integrated circuit corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Solar Way (Hong Kong) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "solar way (hong kong) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"PNC Systems (Jiangsu) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"pnc systems (jiangsu) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Xinyan Holdings Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou xinyan holdings co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Communications Construction Company Dredging Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china communications construction company dredging group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hami Municipality Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hami municipality public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HSJ Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hsj electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shenzhen Winthought Tech",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen winthought tech"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jadeshine",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jadeshine"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Lightstar Technology Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "lightstar technology ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xi'an Aerospace Huaxun Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an aerospace huaxun technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Mailite Communication Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan mailite communication co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Bailiansheng Electronic Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen bailiansheng electronic science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Dongpengshang Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen dongpengshang electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Galaxy Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "galaxy electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cambricon (Hong Kong) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cambricon (hong kong) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Aviation International Corporation of China International Simulation Technology Service Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aviation international corporation of china international simulation technology service co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AECC China Gas Turbine Establishment",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aecc china gas turbine establishment"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"GRG Metrology & Test (Chongqing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"grg metrology & test (chongqing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Haiguang Integrated Circuit",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu haiguang integrated circuit"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tianjin Phytium Information Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin phytium information technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Volant Industry",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china volant industry"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xian Aero-Engine Controls Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xian aero-engine controls co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "718th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "718th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Aerospace Equipment Manufacturing",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai aerospace equipment manufacturing"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Sinonet Science & Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing sinonet science & technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AECC Commercial Aircraft Engine Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aecc commercial aircraft engine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aksu District Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aksu district public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Aerotek Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an aerotek co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Dongguan Lvyuan Industry Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan lvyuan industry investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xinjiang Silk Road BGI",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang silk road bgi"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Smartcom Business Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen smartcom business co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Armyfly",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "armyfly"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "710th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "710th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Aisinochip Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai aisinochip electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC International Holding Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic international holding corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Ehang International Trade Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ehang international trade limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputing Center Wuxi",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputing center wuxi"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Beijing",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud beijing"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Moore Thread Intelligent Technology (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"moore thread intelligent technology (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Ruidakang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing ruidakang technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"3HC Semiconductors (HK) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"3hc semiconductors (hk) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kindroid",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kindroid"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sinobright Import and Export Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sinobright import and export company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ZhongJie Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhongjie electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Asia International Trading Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "asia international trading company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Brilliance Technology Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "brilliance technology ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "208th Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "208th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "701st Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "701st research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Cambricon Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou cambricon information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yishang Network (Shenzhen) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yishang network (shenzhen) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Boson Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"boson technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Harbin Chuangyue Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"harbin chuangyue technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 55th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 55th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputing Center Changsha",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputing center changsha"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CETC Cloud (Beijing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cetc cloud (beijing) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Higon",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "higon"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China National Scientific Instruments and Materials",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china national scientific instruments and materials"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Electronics Technology Group Corporation",
    "kind": "30th Research Institute\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china electronics technology group corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AIF Global Logistics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aif global logistics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Globe Communication (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "globe communication (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Anhui Cambricon Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"anhui cambricon information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Comtel Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "comtel technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "724th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "724th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing LES Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing les information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "IS'Vision",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "is'vision"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Tongguang Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "CETC 7",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou tongguang communication technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Furuida Heilongjiang Supply Chain Management Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"furuida heilongjiang supply chain management co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing Guosheng Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing guosheng electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SenseNets",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sensenets"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Peaceful Vision (Lianyungang) Electronic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"peaceful vision (lianyungang) electronic co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sur-Link International (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sur-link international (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CST Source Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cst source industrial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yogone Electronics Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yogone electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shenzhen Institute of Quantum Science and Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen institute of quantum science and engineering"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing UniStrong Science & Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing unistrong science & technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Urumqi Haishi Xin'an Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"urumqi haishi xin'an electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Changhe Aircraft Industries Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changhe aircraft industries group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yusha Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yusha group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HiSilicon Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hisilicon technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hebei Medicines Health",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei medicines health"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Anhui Bowei Ruida Electronics Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui bowei ruida electronics technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sun Wing Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sun wing ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tianjin 764 Communication and Navigation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin 764 communication and navigation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yibin Sanjiang Machine Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yibin sanjiang machine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "KingV Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kingv ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing FiberHome Starrysky Communication Development Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing fiberhome starrysky communication development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation No. 28 Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation no. 28 institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "207th Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "207th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sharon Yang",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sharon yang"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing Engineering Institute of Aircraft Systems",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing engineering institute of aircraft systems"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ECU Electronic Industrial",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ecu electronic industrial"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hebei Poshing Electronics",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei poshing electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Bayingolin Mongolian Autonomous Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bayingolin mongolian autonomous prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Hengda Microwave Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an hengda microwave technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AVIC Chengdu Aircraft Industrial (GROUP) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avic chengdu aircraft industrial (group) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jiangsu Leidian Technology Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangsu leidian technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Moore Thread Intelligent Technology (Chengdu) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"moore thread intelligent technology (chengdu) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technologies Co.",
    "kind": "Ltd.",
    "securityCredentials": "Beijing Research Institute\"",
    "endUserLists": "Huawei",
    "espionage": "",
    "normalizedName": "\"huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 14th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 14th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu Tianyuan Metal Powder Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu tianyuan metal powder co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Guangdong Qinzhi Technology Research Institute Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangdong qinzhi technology research institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hebei Puxing Electronic",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei puxing electronic"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tianjin 764 Avionics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin 764 avionics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing LES Cybersecurity and Information Technology Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing les cybersecurity and information technology research institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Peaktek Company Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "peaktek company ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Henan Aerospace Precision Mach",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "henan aerospace precision mach"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guizhou Liyang Intl Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guizhou liyang intl manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China General Nuclear Power Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china general nuclear power group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shenzhen Avanlane",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen avanlane"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "239 Factory",
    "kind": "CASIC-3A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "239 factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hafei Aviation Industry Co.",
    "kind": "Ltd. (HAFEI)\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hafei aviation industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou Huawei Digital Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou huawei digital technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou Zhongke Microelectronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou zhongke microelectronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ningbo MOOF Trading Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ningbo moof trading co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"United Microelectronics Center Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"united microelectronics center co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cambricon (Xi'an) Integrated Circuit Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cambricon (xi'an) integrated circuit co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou Huawei Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou huawei communication technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SJ Semiconductor",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sj semiconductor"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Rising Logistics Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "rising logistics company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kenwoo International Trade Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kenwoo international trade company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technologies Co.",
    "kind": "Ltd.",
    "securityCredentials": "Material Characterization Lab\"",
    "endUserLists": "Huawei",
    "espionage": "",
    "normalizedName": "\"huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Leadway Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "leadway technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Machine Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei machine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Marine Networks Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei marine networks co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tianjin Broadcasting Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin broadcasting equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Skytop Electronics Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "skytop electronics ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Liuhe BGI",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing liuhe bgi"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiatai Aircraft Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiatai aircraft equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu Hengtong Optic-Electric Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu hengtong optic-electric co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Hongyu Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "CETC 7",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou hongyu technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Digital Technologies (Suzhou) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei digital technologies (suzhou) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Cambricon Technologies Corporation Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "cambricon technologies corporation limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "699 Factory",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "699 factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technologies Service Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei technologies service co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hebei Sinopack Electronics",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei sinopack electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Quantum Science and Technology Yangtze River Delta Industrial Innovation Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "quantum science and technology yangtze river delta industrial innovation center"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanxi Hemu Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanxi hemu industrial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Electronics Technology Group Corporation Electronic Equipment Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china electronics technology group corporation electronic equipment group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Second Institute of Oceanography",
    "kind": "MNR",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "second institute of oceanography"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai High-Performance Integrated Circuit Design Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai high-performance integrated circuit design center"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Communications Construction Company Second Navigation Engineering Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction company second navigation engineering bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yashen (HK) Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yashen (hk) electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Beizhan Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu beizhan electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Fengjin Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai fengjin electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "284 Factory",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "284 factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hetian Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hetian prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tianjin Micro Nano Manufacturing",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin micro nano manufacturing"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huawei New Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huawei new technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huayi Internet Information Service Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huayi internet information service co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "MT Microsystems",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "mt microsystems"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing Guobo Electronic",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing guobo electronic"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CloudWalk Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cloudwalk technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hongtai Electric Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hongtai electric ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang Kehua Hechang Biological Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang kehua hechang biological science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Research Center for Parallel Computer Engineering and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national research center for parallel computer engineering and technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Longtek Company",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"longtek company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sanya Highlander Huanyu Ocean Information Technology Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sanya highlander huanyu ocean information technology corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Huawei Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou huawei investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Suowei Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai suowei information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shihezi Municipality Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shihezi municipality public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Sansha Highlander Marine Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sansha highlander marine information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Guang Ming Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing guang ming electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Zhengyuan Chuangshi Consulting Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhengyuan chuangshi consulting co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SITONHOLY (Tianjin) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sitonholy (tianjin) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Maxtronic International Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"maxtronic international co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Computing Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud computing technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sunway Technology Electronics Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sunway technology electronics ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chipwinone Electronics Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chipwinone electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Dongguan Huiqun Electronic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan huiqun electronic co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou New Longshine Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou new longshine information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "At One Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "at one electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tonghui Electronics",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tonghui electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Haiguang Microelectronics Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu haiguang microelectronics technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Biren Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai biren information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing Aixi Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing aixi information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "FY International Trading Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fy international trading company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Jingelang Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen jingelang co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Tech Hi Industry Import and Export Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china tech hi industry import and export corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 7th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 7th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tacheng Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tacheng prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Winthought Company Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "winthought company ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AVIC General Aircraft Huanan Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avic general aircraft huanan industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CETC Chip Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cetc chip technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cambricon Jixingge (Nanjing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cambricon jixingge (nanjing) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tongfang NucTech Technology Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tongfang nuctech technology ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "750th Test Center",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "750th test center"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Fortune International Trading",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fortune international trading"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Ninehead Bird Semiconductor",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ninehead bird semiconductor"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jincheng Group Imp & Exp. Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jincheng group imp & exp. co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Sumec Instruments Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sumec instruments equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou Bearing Test & Research Center Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou bearing test & research center co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC Leihua Electronic Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic leihua electronic technology research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Poyotencon Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu poyotencon technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jet-Prop International Forwarding (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jet-prop international forwarding (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Biren Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing biren technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Aero Lever Precision Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing aero lever precision ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Korchina Logistics (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "korchina logistics (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Laboratory of Toxicant Analysis",
    "kind": "Institute of Pharmacology and Toxicology\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"laboratory of toxicant analysis"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Airpart Consolidated Trading",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "airpart consolidated trading"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"PXW Semiconductor Manufactory Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"pxw semiconductor manufactory co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Center for Excellence in Quantum Information and Quantum Physics",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "center for excellence in quantum information and quantum physics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Holy Aviation Science & Tech",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu holy aviation science & tech"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hangzhou Huawei Enterprises",
    "kind": "Huawei",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hangzhou huawei enterprises"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing Asset Management Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing asset management co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hyper Systems Union Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hyper systems union limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Qihoo 360",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qihoo 360"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tumushuke Municipal Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tumushuke municipal public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Scitech International Express Co. Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "scitech international express co. limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Winners Global Trading Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "winners global trading co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing J&A Industry & Trade Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing j&a industry & trade co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AW Industrial Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aw industrial ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Universe Market Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "universe market limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xi'an Xr Aero-Components Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an xr aero-components co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Brilliance Technology Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "brilliance technology group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 58th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 58th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Aeronautics Yangpu Technology Investment Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing aeronautics yangpu technology investment company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Connec Electronic Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "connec electronic ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yixin Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yixin science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing colpak Mechanical Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing colpak mechanical equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jiangxi Hongdu Aviation Ind. Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangxi hongdu aviation ind. group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ROFS Microsystems",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "rofs microsystems"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Voyage Technology (HK) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"voyage technology (hk) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Boertala Mongolian Autonomous Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "boertala mongolian autonomous prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenyang Academy of Instrumentation Science Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang academy of instrumentation science co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Overland Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an overland science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Bada Group Hong Kong Corporation",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"bada group hong kong corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Nova Instruments Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai nova instruments co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Dongguan Lingkong Remote Sensing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan lingkong remote sensing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "159 Factory",
    "kind": "CASIC-3A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "159 factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang Lianhai Chuangzhi Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang lianhai chuangzhi information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chuangxinda Electronics-Tech Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chuangxinda electronics-tech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nano Tech International Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nano tech international co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Info Rank Technologies",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "info rank technologies"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CAST Xi'an Spaceflight Engine Factory",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "cast xi'an spaceflight engine factory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Satellite Meteorological Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national satellite meteorological bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuxi Paike New Mat. Tech. Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi paike new mat. tech. co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hong Kong Cheung Wah Electronics Technology Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hong kong cheung wah electronics technology company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Center for Quantum Science Research",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai center for quantum science research"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hubei Guangxing Communications Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hubei guangxing communications technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Laurel Technologies Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "laurel technologies co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Carry Goldstar Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "carry goldstar ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "World Jetta (H.K.) Logistics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "world jetta (h.k.) logistics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Cloudmind Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing cloudmind technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kelamayi Municipality Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kelamayi municipality public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Dandong Nondestructive Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dandong nondestructive electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Sichuan Hangte Aviation Tech. Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan hangte aviation tech. co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Tech. Investment Co.",
    "kind": "Huawei",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei tech. investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hunan Goke Microelectronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hunan goke microelectronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Huawei Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Brainware Terahertz",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "brainware terahertz"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technologies Co.",
    "kind": "Ltd.",
    "securityCredentials": "Xi'an Research Institute\"",
    "endUserLists": "Huawei",
    "espionage": "",
    "normalizedName": "\"huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 48th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 48th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hongxin Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hongxin technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aispeed Industry Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aispeed industry ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shenzhen Huawei Technologies Software",
    "kind": "Huawei",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen huawei technologies software"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Multi-Mart Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"multi-mart electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Institute of Biological Products Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan institute of biological products co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"TaiYuan EFT Equipment Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"taiyuan eft equipment manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xuan Qi Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xuan qi technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tongfang R.I.A. Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tongfang r.i.a. co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Shanghai",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud shanghai"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "A.C. International",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "a.c. international"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Like Innovative Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an like innovative information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shandong Sheenrun Optics and Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shandong sheenrun optics and electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xi'an Xiangyu Aviation Technology Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an xiangyu aviation technology group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "705th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "705th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jinan Tongbaolai Oilfield Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jinan tongbaolai oilfield equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hong Kong Engy Technology Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hong kong engy technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Communications Construction Company Shanghai Waterway Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction company shanghai waterway bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yutian Haishi Meitian Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yutian haishi meitian electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xinjiang Uighur Autonomous Region People's Government Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinjiang uighur autonomous region people's government public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanxi Eagles Men Aviation Science and Technology Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanxi eagles men aviation science and technology group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 41st Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 41st research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CSSC Huangpu Wenchong Shipbuilding Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cssc huangpu wenchong shipbuilding co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuxi Turbine Blade Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi turbine blade co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "711th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "711th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Nuclear Power Technology Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china nuclear power technology research institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Tianlang Electronic Science Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai tianlang electronic science co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang Beidou Tongchuang Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang beidou tongchuang information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Luopu Haishi Dingxin Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"luopu haishi dingxin electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Ruixin Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an ruixin investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hui Tong Business Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hui tong business ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CSSC Electronic Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "cssc electronic technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Fussion Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"fussion electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing E-science Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing e-science co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "703rd Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "703rd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Anhui Bowei Chang An Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui bowei chang an electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huawei Training School Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huawei training school co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Day Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu day communication technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wulanchabu Huawei Cloud Computing Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wulanchabu huawei cloud computing technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Panda International Information Technology Company",
    "kind": "Ltd\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"panda international information technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Iwintall Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing iwintall technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"BGI Tech Solutions (Hongkong) Co.",
    "kind": "Ltd\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"bgi tech solutions (hongkong) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Software Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei software technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wynn Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wynn electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CSSC Xijiang Shipbuilding Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cssc xijiang shipbuilding co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AGCU Scientech",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "agcu scientech"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Intellifusion",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "intellifusion"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Xianhexin Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen xianhexin electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Zhongshang Dingsheng Mechanical and Electrical Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhongshang dingsheng mechanical and electrical equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Eric Mechanics and Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou eric mechanics and electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Hua'antai Intelligent Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen hua'antai intelligent technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Avant Science Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avant science co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanchang Huawei Communication Technology",
    "kind": "Huawei",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanchang huawei communication technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huayi Loan Small Loan Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huayi loan small loan co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Xinwei Transportation Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou xinwei transportation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputing Center Guangzhou",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputing center guangzhou"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Bozhitongda Technologic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen bozhitongda technologic co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Shenzhen",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud shenzhen"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yitu Technologies",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yitu technologies"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shaanxi Reactor Microelectronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi reactor microelectronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wavelet Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wavelet electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Surlink Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "surlink group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Mossel Trade Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai mossel trade co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "612 Institute",
    "kind": "AVIC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "612 institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai QuantumCTek Co.",
    "kind": "LTD.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai quantumctek co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "702nd Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "702nd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jiangsu Hengtong Marine Cable Systems Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangsu hengtong marine cable systems co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Micro Electronic Technology",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "micro electronic technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hunan South General Aviation Engine Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hunan south general aviation engine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Systems Engineering Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "systems engineering research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "713th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "713th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Anhui Sun-Create Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui sun-create electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Powersun Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "powersun electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technology Co.",
    "kind": "Ltd. Hangzhou Research Institute\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Light Cloud (Hangzhou) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"light cloud (hangzhou) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ETC Electronics Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "etc electronics ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Integrated Circuit Research and Development Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai integrated circuit research and development center"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AZUP International Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"azup international group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Lianqi (HK) Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"lianqi (hk) electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shaanxi Zhi En Electromechanical Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi zhi en electromechanical technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hefei National Laboratory for Quantum Information Science",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hefei national laboratory for quantum information science"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Swelatel Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "swelatel technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hangzhou Hikmicro Sensing Technology Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hangzhou hikmicro sensing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Qing'an International Trading Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qing'an international trading group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronic Technology Group Corporation 11th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronic technology group corporation 11th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Vision Strategy Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing vision strategy technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Supercomputing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai supercomputing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Aircraft Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai aircraft manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing LES Electronic Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing les electronic equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Shengbo Xietong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing shengbo xietong technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Siyuan Electronic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing siyuan electronic co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kunhai (Yanjiao) Innovation Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kunhai (yanjiao) innovation research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tianjin Tiandi Weiye Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin tiandi weiye technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"LINKZOL (Beijing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"linkzol (beijing) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Breeze Technology Jiangsu Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai breeze technology jiangsu co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Emax Technology Co Ltd HK",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "emax technology co ltd hk"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Device (Dongguan) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei device (dongguan) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Gaobeidian Kaituo Precise Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"gaobeidian kaituo precise instrument co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wuxi Jiangnan Institute of Computing Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuxi jiangnan institute of computing technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Aoshi Control Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai aoshi control technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "204th Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "204th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhuhai Biren Integrated Circuit Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhuhai biren integrated circuit co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 36th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 36th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"North Huawei Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"north huawei communication technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sur-Link Technology (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sur-link technology (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Telixin Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"telixin electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Yidian Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen yidian technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yili Kazakh Autonomous Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yili kazakh autonomous prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"China Aviation Development Harbin Bearing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china aviation development harbin bearing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Biren Integrated Circuit Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou biren integrated circuit co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huawei Terminal Commercial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huawei terminal commercial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "206th Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "206th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Opto-Electronics Technology Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing opto-electronics technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Huawei Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai huawei technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Lion Chip Electronics Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "lion chip electronics ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hefei Core Storage Electronic Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hefei core storage electronic ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kezilesu Kyrgyz Autonomous Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kezilesu kyrgyz autonomous prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yongli Electronic Components (Shenzhen) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yongli electronic components (shenzhen) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Changji Hui Autonomous Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "changji hui autonomous prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhongke Xinliang (Beijing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongke xinliang (beijing) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Thundsea Electric Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "thundsea electric limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Micro Electronics Equipment (Group) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai micro electronics equipment (group) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Suntric Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "suntric company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "717th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "717th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shandong Yuehaitongxin Keji Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shandong yuehaitongxin keji ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Nanjiang Aerospace Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing nanjiang aerospace technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ARI International",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ari international"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Huawei Communications Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang huawei communications technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 16th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 16th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu HNHB Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu hnhb equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Huawei Digital Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing huawei digital technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Legrit Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen legrit technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ceyear Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ceyear technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Moore Thread Intelligent Technology (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"moore thread intelligent technology (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Phonai Electronics Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "phonai electronics ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai HiSilicon Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai hisilicon technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wisdom Import and Export (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wisdom import and export (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wuhan IRCEN Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuhan ircen technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"CETC LES Information System Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cetc les information system group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Huanjia Telecommunication Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing huanjia telecommunication co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yield Best International",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yield best international"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technology Co.",
    "kind": "Ltd. Chengdu Research Institute\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Changzhou Guoguang Data Communications Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changzhou guoguang data communications co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Centec Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou centec technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Able Supply Chain Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "able supply chain limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Star Tech Aviation Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"star tech aviation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Ander Tech. Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing ander tech. co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Guizhou Aviation Tech. Dev. Nat.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guizhou aviation tech. dev. nat."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huawei Technical Services Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huawei technical services co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Maipu Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"maipu communication technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Cambricon Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai cambricon information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Loongson Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "loongson technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zongyi Superconductor Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zongyi superconductor technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Eagles Men Aviation Science and Technology Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"eagles men aviation science and technology group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing FJR Optoelectronic Technology Company Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing fjr optoelectronic technology company ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Device (Shenzhen) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei device (shenzhen) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huaduan (Anhui) Machine Tool Manufacturer Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huaduan (anhui) machine tool manufacturer co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Taicheng Shipbuilding Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou taicheng shipbuilding industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"ECOM International (HK) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ecom international (hk) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "712th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "712th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huisui Zhang",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huisui zhang"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yunchip Microelectronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yunchip microelectronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Huawei Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan huawei investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kuang-Chi Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kuang-chi group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China National Plant Import/Export Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china national plant import/export co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chongxin Bada Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongxin bada technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Pishan Haishi Yong'an Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"pishan haishi yong'an electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chongqing Chuandong Shipbuilding Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing chuandong shipbuilding industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HK Hengyu Storage Logistics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hk hengyu storage logistics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "714th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "714th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jadeshine Engineering HK Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jadeshine engineering hk co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jin Yan Technology & Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jin yan technology & development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hongkong Delta Electronics Technology Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hongkong delta electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "715th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "715th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Selective Components Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "selective components ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "707th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "707th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Toptech Electronics Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "toptech electronics ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shenzhen Huawei Technology Service",
    "kind": "Huawei",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen huawei technology service"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xinnlinx Electronics Pte Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xinnlinx electronics pte ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "USETA Tech (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "useta tech (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang Sailing Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang sailing information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangxin Shipbuilding and Heavy Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangxin shipbuilding and heavy industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Dongguan Huawei Service Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan huawei service co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shaanxi Aero Electric Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi aero electric co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kesina Services",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kesina services"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing Institute of Radio Technology",
    "kind": "CETC 14",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing institute of radio technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Key Laboratory for Quantum Information",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "key laboratory for quantum information"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yiwu Tianying Optical Instrument Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yiwu tianying optical instrument company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"QuantumCTek Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"quantumctek co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Zhuhai Orbita Control Systems",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhuhai orbita control systems"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"New H3C Semiconductor Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"new h3c semiconductor technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Urumqi Tianyao Weiye Information Technology Service Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"urumqi tianyao weiye information technology service co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Toptics",
    "kind": "Inc.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"toptics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Narpel Technology Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"narpel technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Transemic Information Technology Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing transemic information technology ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Speed Industrial Materials Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen speed industrial materials co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhongtian Technology Submarine Cable Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongtian technology submarine cable co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Huawei Longshine Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing huawei longshine information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hangzhou Biren Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou biren technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Daystar Electric (HK) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "daystar electric (hk) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jinnway Data Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jinnway data ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Jiangsu Meilong Aviation Components Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangsu meilong aviation components co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Shark Sprite Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai shark sprite technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AEE Shenzhen Yidian Aviation Technology Co.",
    "kind": "Ltd\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aee shenzhen yidian aviation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Qingdao National Laboratory of Marine Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "qingdao national laboratory of marine science and technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AECC Shenyang Liming Aero Engine Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aecc shenyang liming aero engine co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Mobile Technology Ltd.",
    "kind": "Huawei",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei mobile technology ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Xiwu Security System Alliance Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu xiwu security system alliance co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Winninc Electronic",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "winninc electronic"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xian Xae Flying Aviation Manufacturing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xian xae flying aviation manufacturing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Huawei High-Tech Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu huawei high-tech investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ling Ao Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ling ao electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Biren Intelligent Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai biren intelligent technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "7th Research Academy",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "7th research academy"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guiyan New District Huawei Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guiyan new district huawei investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hefei ECU-TAMURA Electric",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hefei ecu-tamura electric"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AECC Aviation Power Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aecc aviation power co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Terminal (Shenzhen) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei terminal (shenzhen) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Superburning Semiconductor (Nanjing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"superburning semiconductor (nanjing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"GEOVIS Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"geovis technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xiong'an Cambricon Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xiong'an cambricon technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "AVIC Flight Automatic Control Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "avic flight automatic control research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "709th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "709th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ZDAS (HK) Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zdas (hk) company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "725th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "725th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "FiberHome Technologies Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fiberhome technologies group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Second Design Department",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "second design department"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Zhongsheng Shengyuan Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an zhongsheng shengyuan technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Fly Raise International Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fly raise international limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wuxi Institute of Advanced Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuxi institute of advanced technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huawei Anjiexin Electricity Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huawei anjiexin electricity co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 45th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 45th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinjiang Tangli Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinjiang tangli technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Master-Uni Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"master-uni industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Machinery Industry Automation Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing machinery industry automation research institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Opturn Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"opturn co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "201 Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "201 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Elink Electronic Technology Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "elink electronic technology co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AVIC General Aircraft Zhejiang Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avic general aircraft zhejiang institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "E-Chips Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "e-chips technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Baoding Giant Import and Export Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"baoding giant import and export co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Zhengzhou Baiwai Intelligent Automation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhengzhou baiwai intelligent automation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hebei Brightway International",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hebei brightway international"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shijiazhuang Development Zone Maiteda Microelectronics Technology Development and Application Corporation",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shijiazhuang development zone maiteda microelectronics technology development and application corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Newsuntech Electronics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "newsuntech electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Kashgar Prefecture Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kashgar prefecture public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Bowei Integrated Circuits",
    "kind": "CETC 13",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bowei integrated circuits"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing 8-Star International Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing 8-star international co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Blueschip Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "blueschip company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hong Kong Haimao Info-Tec Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hong kong haimao info-tec development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputing Center Jinan",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputing center jinan"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "210th Research Institute",
    "kind": "CASIC-2A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "210th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xi'an Aircraft Industrial Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an aircraft industrial company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shaanxi Hongyuan Aviation Forging",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shaanxi hongyuan aviation forging"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei OpenLab Suzhou",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei openlab suzhou"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputing Center Tianjin",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputing center tianjin"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "National Supercomputer Center Zhengzhou",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national supercomputer center zhengzhou"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Jin Sheng Bo Yue Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing jin sheng bo yue technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BOP Opto-Electronics Technology Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bop opto-electronics technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"STK Electronics (HK) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"stk electronics (hk) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Harbin Xinguang Feitian",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "harbin xinguang feitian"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing SunSea Industry Corporation",
    "kind": "CETC 14",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing sunsea industry corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Biren Integrated Circuit Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai biren integrated circuit co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Taly Aviation Technologies Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china taly aviation technologies corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Fujian Jinhua Integrated Circuit Company",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"fujian jinhua integrated circuit company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Communications Construction Company Tianjin Waterway Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china communications construction company tianjin waterway bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Gaohui HK Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "gaohui hk electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Central Right Investments Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "central right investments ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Corad Technology (Shenzhen) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "corad technology (shenzhen) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Highlander (Hong Kong) Maritime Navigation Science and Technology LLC",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "highlander (hong kong) maritime navigation science and technology llc"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Harbin Yun Li Da Technology and Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"harbin yun li da technology and development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chongqing Optel Telecom Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing optel telecom technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Dalian",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud dalian"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "760th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "760th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangdong Dongling Carbon Tech. Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangdong dongling carbon tech. co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen HiSilicon Technologies Co.",
    "kind": "Electrical Research Center\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen hisilicon technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hengye Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hengye technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Government Flying Service",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "government flying service"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shaanxi Aircaft Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi aircaft industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Guiyang",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud guiyang"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 52nd Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 52nd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huawei Technical Service Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huawei technical service co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Altay Municipality Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "altay municipality public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "719th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "719th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HiSilicon Optoelectronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hisilicon optoelectronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "NEDITEK",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "neditek"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Haisi Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai haisi technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangxi Xintuo Enterprise Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangxi xintuo enterprise co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xac Group Aviation Electronics Import & Export Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xac group aviation electronics import & export co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Origin Quantum Computing Technology (Hefei) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"origin quantum computing technology (hefei) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hexin Xingtong Technology (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hexin xingtong technology (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HK P&W Industry Co. Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hk p&w industry co. ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shaanxi Changling Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi changling electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Huawei Cloud Guangzhou",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "huawei cloud guangzhou"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shenzhen Rion Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen rion technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Urumqi Municipal Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "urumqi municipal public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"XAIC Tech (Xi'an) Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xaic tech (xi'an) industrial co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Kyland Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"kyland technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "502 Research Institute",
    "kind": "China Academy of Space Technology (CAST)",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "502 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "704th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "704th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Moyu Haishi Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"moyu haishi electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "MTech Industrial Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "mtech industrial limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Fuhua Precision Man. Co",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fuhua precision man. co"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing HiFar Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing hifar technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Aircraft Design and Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai aircraft design and research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ningbo Huawei Computer & Net Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "Huawei",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ningbo huawei computer & net co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Mingxinyuan Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen mingxinyuan co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhongke Xingtu Space Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongke xingtu space technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "CNOOC Limited",
    "kind": "CNOOC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "cnooc limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Forensic Genomics International",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "forensic genomics international"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"HiSilicon Tech (Suzhou) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hisilicon tech (suzhou) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "723rd Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "723rd research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Tianhaida Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing tianhaida technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Ryan Wende Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing ryan wende science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wujiaqu Municipality Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wujiaqu municipality public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "513 Research Institute",
    "kind": "China Academy of Space Technology (CAST)",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "513 research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wuxi Beetech Inc.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuxi beetech inc."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sunton Tech Hong Kong Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sunton tech hong kong ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "12th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "12th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Suke Logistics Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "suke logistics ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Allparts Trading Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"allparts trading co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu Hengxiang Science and Education Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu hengxiang science and education equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"AECC Aero Science & Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aecc aero science & technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Hangxin Aviation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou hangxin aviation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenyang Xizi Aviation Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang xizi aviation industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Leike Defense Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing leike defense technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Turfan Municipality Public Security Bureau",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "turfan municipality public security bureau"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chinese Flight Test Establishment",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese flight test establishment"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Nuclear Power Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou nuclear power research institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Xiang Cheng Gao Trading (HK) Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xiang cheng gao trading (hk) ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "726th Research Institute",
    "kind": "CSSC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "726th research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Ti-Tech Science and Technology Development Co.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing ti-tech science and technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Ningbo Semiconductor International Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ningbo semiconductor international corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Raycus Fiber Laser Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan raycus fiber laser technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Academy of Electronics and Information Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china academy of electronics and information technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen DJI Innovation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen dji innovation technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SMIC Hong Kong International Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"smic hong kong international co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu JOUAV Automation Tech Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu jouav automation tech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Dahua Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang dahua technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SMIC Northern Integrated Circuit Manufacturing (Beijing) Co.",
    "kind": "Ltd\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"smic northern integrated circuit manufacturing (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Small Leopard Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"small leopard electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Dragonfly Supply Chain Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen dragonfly supply chain co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "L-Tong Electronic Technology Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "l-tong electronic technology company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Jiachuang Weiye Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen jiachuang weiye technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Moreget Creative Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing moreget creative technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Detail Technology (HK) Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "detail technology (hk) limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Avin Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"avin electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Kinglead Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"kinglead electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suntop Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suntop semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Sky Rise Technology Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sky rise technology ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Semi Electronic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an semi electronic co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zone Chips Electronics Hong Kong Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zone chips electronics hong kong co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Planet Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "planet technology"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Onstar Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"onstar electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yutron Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yutron technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Rui En Koo Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"rui en koo technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "IMAXChip",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "imaxchip"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen One World International Logistics Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen one world international logistics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ace Electronics (HK) Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ace electronics (hk) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "UCreate Electronics Group",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ucreate electronics group"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Rayscience Optoelectronics Innovation Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"rayscience optoelectronics innovation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xin Quan Electronics Hong Kong Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xin quan electronics hong kong co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Insight Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "insight electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "BVI Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "bvi electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tenco Technology Company Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tenco technology company ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Lion Heart International Trading Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing lion heart international trading company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Mei Xin Electronic (HK) Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"mei xin electronic (hk) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hong Kong Qisu Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hong kong qisu electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Midas Lighting Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "midas lighting limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hytera Communications Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hytera communications limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "RYX Electronic (HK) Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ryx electronic (hk) limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cinty Intl (HK) Industry Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cinty intl (hk) industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tengxuxing Electronic Technology HK Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tengxuxing electronic technology hk limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Minhoo Logistics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "minhoo logistics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "HWA Create",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hwa create"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hong Kong Yayang Trading Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hong kong yayang trading ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Megatek Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "megatek ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Pera Global",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "pera global"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Cloudmax Tech Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cloudmax tech co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Transemic Technology Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing transemic technology ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chipgoo Electronics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chipgoo electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Piraclinos Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "piraclinos limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Incomp Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "incomp limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Grun Group Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"grun group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Qianpu Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"qianpu technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Comsum Technologies (Group) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "comsum technologies (group) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "3-K Electronics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "3-k electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"DGT Technology (HK) Co.",
    "kind": "Limited\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dgt technology (hk) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "O-Nice Trading Co. Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "o-nice trading co. limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"JCN (HK) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jcn (hk) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Taihe Electric (Hong Kong) Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "taihe electric (hong kong) limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ZeYuan Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zeyuan technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "MAK Logistics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "mak logistics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wellgo International Industrial Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wellgo international industrial limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Yield Bright Industrial Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "yield bright industrial limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ICsole Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "icsole technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Eastech Electronics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "eastech electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"TiMi Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"timi technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen BZ Space Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen bz space technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hongkong Inkson Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hongkong inkson technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Foang Tech Inc.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "foang tech inc."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tiger Force Electronics Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tiger force electronics limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hong Kong Haiheng Electronics Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hong kong haiheng electronics co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ICSOSO Electronics Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "icsoso electronics co. ltd."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Xuanyu Intelligent Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing xuanyu intelligent technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Fluid Physics",
    "kind": "China Academy of Engineering Physics\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of fluid physics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Mechanical Manufacturing Technology",
    "kind": "China Academy of Engineering Physics\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of mechanical manufacturing technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Tenth Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the tenth research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "General Design Institute of Hubei Academy of Aerospace Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "general design institute of hubei academy of aerospace technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Harbin Institute of Technology (Weihai)",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "harbin institute of technology (weihai)"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Inner Mongolia Synthetic Chemical Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "inner mongolia synthetic chemical research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Weihai Weigao Electronic Engineering Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"weihai weigao electronic engineering co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenyang SIASUN Robot Automation Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang siasun robot automation co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Institute of Aerospace Precision Mechatronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an institute of aerospace precision mechatronics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Hexie Navigation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing hexie navigation technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Systems Engineering",
    "kind": "Academy of Military Sciences",
    "securityCredentials": "System Overall Research Institute\"",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of systems engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 22nd Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 22nd research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 28th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 28th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Zhongshi Shunlang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu zhongshi shunlang technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Aerospace Vehicle Overall Design Department",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing aerospace vehicle overall design department"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Beidou Star Navigation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing beidou star navigation technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nanjing Institute of Electronic Equipment",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing institute of electronic equipment"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Jinghang Institute of Computing and Communication",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing jinghang institute of computing and communication"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace New Weather Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace new weather technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Aviation Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "army aviation academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Netruida Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing netruida technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Qunling Energy Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing qunling energy technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanjing Nanrui Jibao Engineering Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing nanrui jibao engineering technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Changzhou Borui Electric Power Automation Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changzhou borui electric power automation equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuxi Shenda Air Conditioning Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi shenda air conditioning equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shijiazhuang Citek Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shijiazhuang citek electronic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Remote Sensing Equipment",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of remote sensing equipment"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Yantai Haiyi Energy Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yantai haiyi energy technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Zhonghai Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhonghai technology development co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hebei Huanchen Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hebei huanchen technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Heilongjiang Discovery Robot Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"heilongjiang discovery robot co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Power Energy Storage Battery System Engineering Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai power energy storage battery system engineering technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Beibian Microgrid Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing beibian microgrid technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhongshan Hexin Packaging Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongshan hexin packaging co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Institute of Precision Metrology and Testing",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai institute of precision metrology and testing"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hunan Xinhai Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hunan xinhai co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shaanxi Tonghua Electromechanical Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi tonghua electromechanical co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of National Defense Engineering",
    "kind": "Academy of Military Sciences of the Chinese People's Liberation Army\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of national defense engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanjing Institute of Water Conservancy and Hydrology Automation",
    "kind": "Ministry of Water Resources\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing institute of water conservancy and hydrology automation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Weiwan Hengrui Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing weiwan hengrui technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Ordnance Industry New Technology Promotion Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china ordnance industry new technology promotion research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Zhongbei Innovation Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhongbei innovation technology development co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Aerospace Measurement and Control Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing aerospace measurement and control technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hefei Institute of Physical Sciences",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hefei institute of physical sciences"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southlake Laboratory",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southlake laboratory"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Kunshan Jiuhua Electronic Equipment Factory",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "kunshan jiuhua electronic equipment factory"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenzhen Fengyun Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen fengyun industrial co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Ultra-High Speed ​​Aerodynamics",
    "kind": "China Aerodynamics Research and Development Center\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of ultra-high speed ​​aerodynamics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Aerospace Technology",
    "kind": "China Aerodynamic Research and Development Center\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of aerospace technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Anfang Hi-Tech Electromagnetic Safety Technology (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"anfang hi-tech electromagnetic safety technology (beijing) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Star Holdings Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"star holdings group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shaanxi Novi Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi novi information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Victory Technology (Wuhan) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"victory technology (wuhan) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Tianjin Golden Fangyuan Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin golden fangyuan instrument co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Hejie Electric Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing hejie electric co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Aerospace Tianhui Data Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an aerospace tianhui data technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "East China Institute of Computing Technology",
    "kind": "CETC 32",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "east china institute of computing technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Fifteenth Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the fifteenth research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 707th Research Institute of China Shipbuilding Industry Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 707th research institute of china shipbuilding industry corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Innovation Port Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an innovation port information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhongke Sanqing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongke sanqing technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Zhongke Sanqing Environmental Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhongke sanqing environmental technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Institute of Surveying and Mapping",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an institute of surveying and mapping"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Satellite Ocean Application Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national satellite ocean application center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Academy of Water Resources and Hydropower Research",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china academy of water resources and hydropower research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Langrui Cryogenic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu langrui cryogenic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Yubo Robot System Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an yubo robot system technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai University of Engineering and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai university of engineering and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "He Hai University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "he hai university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jiangyin Vocational and Technical College",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiangyin vocational and technical college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Physical and Chemical Analysis and Testing Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing physical and chemical analysis and testing center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Physical and Chemical Testing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing physical and chemical testing technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Meteorological Administration Wuhan Rainstorm Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china meteorological administration wuhan rainstorm research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Seventh Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the seventh research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Industrial University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an industrial university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Institute of Optics and Fine Mechanics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an institute of optics and fine mechanics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Metal Research",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of metal research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Sichuan Air Separation Plant (Group) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan air separation plant (group) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"China Electric Apparatus Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china electric apparatus research institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Aerospace Experiment Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of aerospace experiment technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Kuaizhou Measurement and Control Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an kuaizhou measurement and control technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Ordnance Industry Experimental and Testing Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china ordnance industry experimental and testing research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenzhen Zhongdian Power Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen zhongdian power technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Electric (Group) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai electric (group) corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Electric Blower Factory Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai electric blower factory co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Iron and Steel Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "iron and steel research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Electric Heavy Casting and Forging Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai electric heavy casting and forging co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Electric Group Shanghai Electric Machinery Factory Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai electric group shanghai electric machinery factory co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhejiang Petrochemical Valve Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang petrochemical valve co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Rongxin Huike Electric Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"rongxin huike electric co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Rongxin Huike Electric Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"rongxin huike electric technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Dinghong Petroleum Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu dinghong petroleum technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Sichuan Sanyuan Environmental Governance Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan sanyuan environmental governance co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanjing Ingma Instrument Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing ingma instrument technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Health and Epidemic Prevention Institute of the 63850th Army of the Chinese People's Liberation Army",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the health and epidemic prevention institute of the 63850th army of the chinese people's liberation army"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CSIC Pengli (Nanjing) Atmospheric Ocean Information System Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"csic pengli (nanjing) atmospheric ocean information system co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"China Shipbuilding Industry Corporation Nanjing Pengli Technology Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china shipbuilding industry corporation nanjing pengli technology group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 54th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 54th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace Hongtu Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace hongtu information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hubei Institute of Aerospace Chemical Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hubei institute of aerospace chemical technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing University of Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing university of science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hangyu Lifesaving Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangyu lifesaving equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 49th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 49th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhejiang University Suzhou Institute of Industrial Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhejiang university suzhou institute of industrial technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenzhen Taike Feitian Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen taike feitian technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shenzhen Lvhang Interstellar Space Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen lvhang interstellar space technology research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenzhen Qianhai Binghan Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen qianhai binghan information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"China Shipbuilding Industry Group Emergency Warning and Rescue Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china shipbuilding industry group emergency warning and rescue equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Environmental Characteristics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of environmental characteristics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Xingye Dayuan Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing xingye dayuan technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Institute of Satellite Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai institute of satellite engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 27th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 27th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 38th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 38th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Satellite Navigation System Management Office",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china satellite navigation system management office"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Henan Weihua Heavy Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"henan weihua heavy machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace Star Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace star technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Guangzhou Zhixun Communication System Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou zhixun communication system co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Tongliao Yilong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tongliao yilong technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Tongrong Civil Engineering Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai tongrong civil engineering technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Taiyuan Rongsheng Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"taiyuan rongsheng technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hengshui Baijin Composite Material Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hengshui baijin composite material technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Academy of Aerospace Systems Science and Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china academy of aerospace systems science and engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"FAW Jiefang Automobile Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"faw jiefang automobile co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Dongfeng Off-Road Vehicle Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongfeng off-road vehicle co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Golden Monkey Group Weihai Leather Goods Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"golden monkey group weihai leather goods co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chongqing Jialing Quanyu Motor Vehicle Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing jialing quanyu motor vehicle co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shenzhen Electric Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shenzhen electric company"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Eighteenth Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the eighteenth research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanyang Second Machine Vehicle Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanyang second machine vehicle manufacturing co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Guangzhou Haige Communication Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou haige communication group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese People's Liberation Army Armament Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese people's liberation army armament academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Ordnance Industry Information Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china ordnance industry information center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Liuhe Huitong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing liuhe huitong technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Academy Science and Technology Innovation Research Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "air force academy science and technology innovation research center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Radio Factory Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu radio factory co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "State-owned No. 459 Factory",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "state-owned no. 459 factory"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Institute of Technology Reco Electronic Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing institute of technology reco electronic information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Fujirui Optoelectronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing fujirui optoelectronics technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Zongheng Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu zongheng technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan Zhongyuan Communication Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan zhongyuan communication co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hefei Tongzhi Electromechanical Control Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei tongzhi electromechanical control technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenyang Shunyi Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang shunyi technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Yangzhou Spark Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yangzhou spark industrial co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "North China Vehicle Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "north china vehicle research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Ordnance Industry Computer Application Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china ordnance industry computer application technology research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Yuanhua Tianchuang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing yuanhua tianchuang technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Aotewei Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu aotewei electronic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Autoway Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu autoway technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Gepu Testing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing gepu testing technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Liugong Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu liugong machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Bengbu Shenzhou Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"bengbu shenzhou machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CSSC Marine Exploration Technology Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cssc marine exploration technology research institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Jutong Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai jutong industrial co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuxi Xingdi Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi xingdi instrument co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhejiang Jiefang Machinery Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang jiefang machinery manufacturing co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhuhai Yunzhou Intelligent Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhuhai yunzhou intelligent technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhengzhou Foguang Power Generation Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhengzhou foguang power generation equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuxi Haite Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi haite machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Nuclear Physics and Chemistry",
    "kind": "China Academy of Engineering Physics\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of nuclear physics and chemistry"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Guangtian Sykes Hydraulic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangtian sykes hydraulic co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Haorui Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an haorui electronic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Suning County Zhongyuan Textile Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suning county zhongyuan textile co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Special Medical Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "army special medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chongqing Jian'an Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing jian'an instrument co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Qingdao Installation and Construction Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"qingdao installation and construction co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenyang Changbai Electronic Application Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang changbai electronic application equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nantong Yongyu Antirust Material Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nantong yongyu antirust material co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hubei Institute of Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hubei institute of technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chengdu University of Information Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu university of information engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Dongguan Altai Display Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan altai display technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Electronic Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of electronic engineering"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sanxia University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sanxia university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Ship Science Research Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china ship science research center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhenjiang Hanhai Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhenjiang hanhai technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Applied Electronics",
    "kind": "China Academy of Engineering Physics\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of applied electronics"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shaanxi Tenn Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi tenn electronic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Kaiyun Lianchuang (Beijing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"kaiyun lianchuang (beijing) technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Shipbuilding Corporation System Engineering Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding corporation system engineering research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Research Institute of Yantai Harbin Engineering University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "research institute of yantai harbin engineering university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Dongguan Tianxiang Aerospace Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongguan tianxiang aerospace technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Armored Forces Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "army armored forces academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Fourteenth Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the fourteenth research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Sichuan Yidian Aviation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan yidian aviation technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 52nd Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 52nd research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Aerospace Control Instruments",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of aerospace control instruments"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "701 Factory of the Chinese People's Liberation Army Navy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "701 factory of the chinese people's liberation army navy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chinese People's Liberation Army Navy Recruitment Pilot Student Work Office",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese people's liberation army navy recruitment pilot student work office"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Dingliang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing dingliang technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Lianyungang Jereh Soft Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"lianyungang jereh soft technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenzhen Shuangping Power Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen shuangping power technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenyang Rubber Research and Design Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang rubber research and design institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Steel Research Nanoco Testing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"steel research nanoco testing technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Industry University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing industry university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Daqing Qinglulangrun Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"daqing qinglulangrun technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Yinai New Material Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai yinai new material technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Ordnance Industry 213th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china ordnance industry 213th research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhu Shipyard Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhu shipyard co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Shipbuilding Industry Corporation No. 711 Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding industry corporation no. 711 research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Qingdao Dongfang Marine High-tech Equipment Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"qingdao dongfang marine high-tech equipment manufacturing co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanxi Ketai Aerospace Defense Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanxi ketai aerospace defense technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Weilan Jizhi Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing weilan jizhi technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Dianke Cloud (Beijing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dianke cloud (beijing) technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 30th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 30th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Central North University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "central north university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan One Decibel Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan one decibel technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan Yuanhai Borch Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan yuanhai borch technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Telemetry Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of telemetry technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace Long March Rocket Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace long march rocket technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan Dafang Environmental Protection Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan dafang environmental protection technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Shipbuilding Corporation No. 719 Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding corporation no. 719 research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhejiang Haiji Nuclear Biotechnology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang haiji nuclear biotechnology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China State Shipbuilding Corporation No. 708 Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china state shipbuilding corporation no. 708 research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhirui Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhirui information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Cyberspace Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu cyberspace science and technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanjing Lefei Aviation Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing lefei aviation technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Naval Aeronautical Engineering Academy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "naval aeronautical engineering academy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Shipbuilding Corporation No. 708 Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding corporation no. 708 research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Aibang Electromagnetic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an aibang electromagnetic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shaanxi Jiuzhou Remote Sensing Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi jiuzhou remote sensing information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Marine Technology Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national marine technology center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Gaode Software Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"gaode software co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Nautical Chart Information Center of the Naval Staff Department of the Chinese People's Liberation Army",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nautical chart information center of the naval staff department of the chinese people's liberation army"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Tianchuang Honghe Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing tianchuang honghe technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CETC (Ningbo) Marine Electronics Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cetc (ningbo) marine electronics research institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 20th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 20th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Tongfang Test Technology (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tongfang test technology (beijing) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Haizhiyuan Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing haizhiyuan technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Bohua Anchuang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing bohua anchuang technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Shipbuilding Industry Corporation No. 704 Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china shipbuilding industry corporation no. 704 research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CASIC Shenzhen (Group) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"casic shenzhen (group) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Jiujiang Branch of No.707 Research Institute of China Shipbuilding Industry Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jiujiang branch of no.707 research institute of china shipbuilding industry corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Liaoning Institute of Metrology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "liaoning institute of metrology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Liaoning Huake Petroleum Equipment Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"liaoning huake petroleum equipment technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Pathfinder Holding Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"pathfinder holding group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Qingdao Tianyin Textile Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"qingdao tianyin textile technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"China National Chemical Corporation Shuguang Rubber Industry Research and Design Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china national chemical corporation shuguang rubber industry research and design institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Simulation Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing simulation center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Wuhan Marine Electric Propulsion Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuhan marine electric propulsion research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanjing Kuidao Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing kuidao technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Long March Tianmin Hi-Tech Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing long march tianmin hi-tech co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Huaquality Excellent Productivity Promotion (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huaquality excellent productivity promotion (beijing) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tianjin Jinhang Computing Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin jinhang computing technology research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 53rd Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 53rd research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Guizhou Aerospace Tianma Electromechanical Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guizhou aerospace tianma electromechanical technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Tianjin Rongchuang Air Service Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin rongchuang air service equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Tianjin Jieqiang Power Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin jieqiang power equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CM (Luoyang) Measurement and Control Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cm (luoyang) measurement and control co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan Binhu Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan binhu electronics co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhongfan Intelligent Technology (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongfan intelligent technology (shanghai) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chenggu Pulse Cutting Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chenggu pulse cutting equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xi'an Aircraft Design Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xi'an aircraft design institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Shuzhilian Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu shuzhilian technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chongqing Naide Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing naide industrial co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Zhongke Xingtu Spatial Data Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an zhongke xingtu spatial data technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Aviation Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aviation technology research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Sichuan Kehua Zhihui Engineering Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan kehua zhihui engineering technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "96607 Military Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "96607 military hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhejiang Dingli Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang dingli machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CITIC Heavy Industries Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"citic heavy industries machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangyin Aifeide General Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangyin aifeide general machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"China Railway Construction Heavy Industry Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"china railway construction heavy industry group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Yangzhou Taili Special Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yangzhou taili special equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Hengan Police Equipment Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu hengan police equipment manufacturing co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhongchuang Zhike (Mianyang) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhongchuang zhike (mianyang) technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace Science and Industry Wuhan Magnetoelectric Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace science and industry wuhan magnetoelectric co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Raytheon Bofeng Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing raytheon bofeng information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Hezheng Special Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu hezheng special equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Institute of Radio Equipment",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai institute of radio equipment"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Institute of Radiation",
    "kind": "China Academy of Testing Technology\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"institute of radiation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiaxing Hongyu Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiaxing hongyu technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "716th Research Institute",
    "kind": "CSIC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "716th research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Ruilihengan Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing ruilihengan technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Four Creation Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"four creation electronics co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CGN Jiuyuan (Chengdu) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cgn jiuyuan (chengdu) technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Tianjin Uranus Hydraulic Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin uranus hydraulic machinery co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Ningbo Shuxiang New Material Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ningbo shuxiang new material co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Rongke Special Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai rongke special equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hunan Boxiang New Material Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hunan boxiang new material co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CASIC Wuhan Magnetoelectric Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"casic wuhan magnetoelectric co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hengyang Tellhow Communication Vehicle Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hengyang tellhow communication vehicle co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace Chenguang Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace chenguang co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhejiang Deli Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang deli equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hunan Aerospace Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hunan aerospace electronics technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hubei Aerospace Long March Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hubei aerospace long march equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Yanshan Electronic Equipment Factory",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing yanshan electronic equipment factory"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Anhui Optical Fiber and Cable Transmission Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "anhui optical fiber and cable transmission technology research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenzhen Laifa Lighting Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen laifa lighting communication technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Xingtiantong Telecommunications Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing xingtiantong telecommunications technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Equipment Design and Testing Technology Institute",
    "kind": "China Aerodynamic Research and Development Center\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"equipment design and testing technology institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hebei Panshi Pump Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hebei panshi pump industry co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shenyang Lushang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang lushang technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Eighth Medical Center",
    "kind": "PLA General Hospital\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"eighth medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hebei Hongdun New Material Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hebei hongdun new material technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xinxiang Oriental Industrial Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinxiang oriental industrial technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hunan Nafel New Material Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hunan nafel new material technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Sushiweizhen Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing sushiweizhen technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chengdu Peak Power Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu peak power co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanghai Puzhi Information Technology Co.",
    "kind": "Ltd. Jiangxi Branch\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai puzhi information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jinan Mingao Xincheng Machinery Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jinan mingao xincheng machinery equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Aerospace Science and Technology Holding Group Co.",
    "kind": "Ltd. Beijing Branch\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace science and technology holding group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sichuan Academy of Fine Arts",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sichuan academy of fine arts"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guangzhou Civil Defense Command Information Guarantee Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guangzhou civil defense command information guarantee center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Nanjing Kongwei Communication Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing kongwei communication technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Aerospace Guangtong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing aerospace guangtong technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Zhongce Zhihui Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhongce zhihui technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jilin Jiangji Special Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jilin jiangji special industry co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Northern Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"northern equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "61699 Army Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "61699 army hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jihua 3502 Business Wear Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jihua 3502 business wear co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Academy of Chinese People's Armed Police Force",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "academy of chinese people's armed police force"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan Hemp Biotechnology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan hemp biotechnology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Beista Equipment Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing beista equipment technology development co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hubei Noble Vacuum Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hubei noble vacuum technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Hongxu Photoelectric Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu hongxu photoelectric technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Runze Jinsong Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing runze jinsong technology development co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Li Ning (China) Sports Goods Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"li ning (china) sports goods co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Kangda Nonwoven Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu kangda nonwoven co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "63600 Army Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "63600 army hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Optoelectronic Technology",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of optoelectronic technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The 39th Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the 39th research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "63680 Army Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "63680 army hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhengzhou Yaosheng Environmental Protection Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhengzhou yaosheng environmental protection technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hunan Satellite Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hunan satellite information technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hainan Univeristy",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hainan univeristy"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Brilliance Special Vehicle Equipment Technology (Dalian) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"brilliance special vehicle equipment technology (dalian) co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Guangzhou Xiaguang Technology Research Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou xiaguang technology research co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanxi North Xing'an Chemical Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanxi north xing'an chemical industry co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Institute of Computer Technology and Application",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of computer technology and application"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Research and Education Center for Data and Communication Protection",
    "kind": "Chinese Academy of Sciences",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "research and education center for data and communication protection"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Tongci Weiye Sensing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing tongci weiye sensing technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Huaxin Consulting Design and Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huaxin consulting design and research institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Wuhan Nuoyaxin Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan nuoyaxin technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Xi'an Junbiao Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an junbiao electronic technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "71352 Army Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "71352 army hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Sichuan Haitian Instrument Electric Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"sichuan haitian instrument electric development co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CCCC Second Navigation Engineering Bureau Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"cccc second navigation engineering bureau co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Fujian Shangrun Precision Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"fujian shangrun precision instrument co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tenth Research Institute of China Electronics Technology Group Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tenth research institute of china electronics technology group corporation"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CRRC Sifang Vehicle Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"crrc sifang vehicle co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Chongqing CLP Daewoo Satellite Application Technology Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chongqing clp daewoo satellite application technology research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "92493 Military Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "92493 military hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 32nd Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 32nd research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Institute of Metrology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china institute of metrology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Zhenxing Institute of Metrology and Testing",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing zhenxing institute of metrology and testing"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shandong Tuohai Marine Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shandong tuohai marine technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "93010 Military Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "93010 military hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Pufan Protection Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing pufan protection technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Bangwei Hi-Tech Special Textile Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing bangwei hi-tech special textile co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jihua Group Co.",
    "kind": "Ltd. System Engineering Center\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jihua group co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Zhangjiagang Siqi Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhangjiagang siqi technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Changchun Jihua 3504 Industrial Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changchun jihua 3504 industrial co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "China Electronics Technology Group Corporation 13th Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china electronics technology group corporation 13th research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Maiteda Electronic Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing maiteda electronic technology development co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hangzhou University of Electronic Science and Technology",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hangzhou university of electronic science and technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Big Data (Fujian) Network Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"big data (fujian) network technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Jiangsu Zhenan Electric Power Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu zhenan electric power equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Hangzhou Zoge Communication Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hangzhou zoge communication equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Anhui Modern TV Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"anhui modern tv technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Guhong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing guhong technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Chongqing Zhence Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing zhence technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Luoyang Kaixun Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"luoyang kaixun electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SMIC Semiconductor Manufacturing (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"smic semiconductor manufacturing (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "MAXTRONIC GLOBAL LIMITED",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "maxtronic global limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Alloy Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun alloy manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shengmei Semiconductor Equipment Wuxi Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shengmei semiconductor equipment wuxi co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Shenqihang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang shenqihang technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Sevenstar Flowmeter Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing sevenstar flowmeter co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Lizhi Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai lizhi technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuxi Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Huada Jiutian Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou huada jiutian technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Pengxinxu Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen pengxinxu technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Hubei Huachangda Intelligent Equipment Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hubei huachangda intelligent equipment company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hwa Tsing (Beijing) Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hwa tsing (beijing) technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guangzhou Skyverse Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guangzhou skyverse technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Yiguang Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan yiguang technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Ningbo Nanda Optoelectronic Materials Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ningbo nanda optoelectronic materials ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhuhai Cornerstone Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhuhai cornerstone technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Equipment Development Department of the Central Military Commission",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "equipment development department of the central military commission"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Guowei Integration Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing guowei integration technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Oriental Crystal Microelectronics Technology (Qingdao) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"oriental crystal microelectronics technology (qingdao) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Purification System Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun purification system technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Piotech Chuangyi (Shenyang) Semiconductor Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"piotech chuangyi (shenyang) semiconductor equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Huafeng Test & Control Technology (Tianjin) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"huafeng test & control technology (tianjin) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Feiai Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai feiai technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Northern Integrated Circuit Technology Innovation Center (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"northern integrated circuit technology innovation center (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhijia Semiconductor Gas Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhijia semiconductor gas co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shengwei Semiconductor Equipment (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shengwei semiconductor equipment (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Xinkailai Industrial Machinery Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen xinkailai industrial machinery co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Huafeng Test & Control Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing huafeng test & control technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yusheng Micro Semiconductor (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yusheng micro semiconductor (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"SwaySure Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"swaysure technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Lingang Kaishitong Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai lingang kaishitong semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Huada Jiutian Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an huada jiutian technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Yuwei Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai yuwei semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing Huada Jiutianke Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing huada jiutianke technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Kaishitong Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei kaishitong semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Skyverse",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "skyverse"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Piotech",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "piotech"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zixi Optical Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zixi optical technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Yuwei Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"yuwei semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ulanqab Nanda Microelectronics Materials Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ulanqab nanda microelectronics materials co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Shuoke Zhongkexin Electronic Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing shuoke zhongkexin electronic equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai AGM Gas Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai agm gas co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Jingyuan Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen jingyuan information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen True Price Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen true price technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Changguang Jizhi Optical Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changguang jizhi optical technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Si'En Qingdao Co. Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "si'en qingdao co. ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Zhongke Xin Electronic Equipment",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing zhongke xin electronic equipment"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Gui'an New District Huawei Investment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"gui'an new district huawei investment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xinlian Rongchuang Integrated Circuit Industry Development (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xinlian rongchuang integrated circuit industry development (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Zibo Keyuanxin Fluorine Trading Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zibo keyuanxin fluorine trading ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Kaishitong Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai kaishitong semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Huada Jiutianke Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu huada jiutianke technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Zhiyi High Purity Electronic Materials (Shanghai) Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhiyi high purity electronic materials (shanghai) ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Piotech (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"piotech (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Guowei Sensing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen guowei sensing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Zhiwei Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei zhiwei semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuxi Kaishitong Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuxi kaishitong technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing E-Town Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing e-town semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "JAC Capital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "jac capital"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Xinsheng Jingrui Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai xinsheng jingrui semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Guoweichip Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen guoweichip technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "General Technology Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "general technology limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Luo Luo Tech Development Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing luo luo tech development limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Tiger Force Electronics",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tiger force electronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Foshan Nanhai Winhope Trade Company",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "foshan nanhai winhope trade company"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Precision Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun precision manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wingtech Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wingtech technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Naura Semiconductor Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing naura semiconductor equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun System Integration Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun system integration co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xiamen Skyverse Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xiamen skyverse technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Huada Jiutianke Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen huada jiutianke technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Integrated Circuit Equipment & Materials Industry Innovation Center Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai integrated circuit equipment & materials industry innovation center co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Jingce Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai jingce semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Skyverse Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai skyverse semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hwa Tsing (Shanghai) Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hwa tsing (shanghai) semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hwa Tsing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hwa tsing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Zhihui Semiconductor Application Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei zhihui semiconductor application technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Electronic Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun electronic technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Huafeng Electronic Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing huafeng electronic equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Zhangge Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen zhangge instrument co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chengdu Skyverse Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chengdu skyverse technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Zhangjiang Laboratory",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhangjiang laboratory"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenyang Xinyuan Micro Business Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang xinyuan micro business development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Shanghai Growth International Logistics Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai growth international logistics ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Naura Technology Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"naura technology group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Yanquan Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai yanquan technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hwa Tsing (Guangzhou) Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hwa tsing (guangzhou) semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Huada Jiutian Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai huada jiutian information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu Qiwei Semiconductor Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu qiwei semiconductor equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Nanpre Mechanics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai nanpre mechanics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Skyverse Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing skyverse technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wise Road Capital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wise road capital"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Aerospace Hill Test Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing aerospace hill test technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Xinsheng Jinko Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai xinsheng jinko semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Tiangong Mechanics Testing Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou tiangong mechanics testing technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Optoelectronic Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun optoelectronic equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shandong Feiyuan Gas Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shandong feiyuan gas co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Zhongdun Security Technology Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing zhongdun security technology group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Wuhan Xinxin Semiconductor Manufacturing Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "wuhan xinxin semiconductor manufacturing company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Modern Advanced Ultra-Precision Manufacturing Center Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai modern advanced ultra-precision manufacturing center co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Institute of Microelectronics",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of microelectronics"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Dandong Mason-Age Trade Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dandong mason-age trade co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Guangke Xintu Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing guangke xintu technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Granpect Co. Ltd",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "granpect co. ltd"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu Nata Optoelectronic Material Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu nata optoelectronic material co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Jingyuan Microelectronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing jingyuan microelectronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanda Optoelectronic Semiconductor Materials Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanda optoelectronic semiconductor materials co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Piotech Jianke (Haining) Semiconductor Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"piotech jianke (haining) semiconductor equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Nanda Optoelectronic Materials Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou nanda optoelectronic materials co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Xinsheng Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai xinsheng semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ACM Research",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "acm research"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Qianhai Skyverse Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen qianhai skyverse semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Raintree Scientific Instruments (Shanghai) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "raintree scientific instruments (shanghai) corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Yuliangsheng Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai yuliangsheng technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Piotech (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"piotech (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Guowei Group (Shenzhen) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"guowei group (shenzhen) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Jingzhuo Information Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai jingzhuo information technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Siwave Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai siwave technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Longde Technology Development Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an longde technology development co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangsu Zhichun System Integration Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangsu zhichun system integration co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Skyverse Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan skyverse semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Zhichun Precision Manufacturing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang zhichun precision manufacturing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Huada Jiutian Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing huada jiutian technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Ruili Microelectronics Equipment (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ruili microelectronics equipment (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhuhai Skyverse Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhuhai skyverse technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Kaishitong Semiconductor Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing kaishitong semiconductor co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Sevenstar Integrated Circuit Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing sevenstar integrated circuit equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Aipusi Precision Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai aipusi precision equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Uniview Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang uniview technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "SMIC Advanced Technology R&D (Shanghai) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "smic advanced technology r&d (shanghai) corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhiwei Semiconductor (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhiwei semiconductor (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Taiyuan Jinke Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"taiyuan jinke semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Woke Trading H.K. Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "woke trading h.k. limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Changsha Zhichun Application Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"changsha zhichun application technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Oriental Crystal Microelectronics Technology (Shanghai) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"oriental crystal microelectronics technology (shanghai) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen Guowei Hongbo Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen guowei hongbo technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "First Design Department",
    "kind": "CASC-1A",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first design department"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Dongfang Jingyuan Electron Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"dongfang jingyuan electron co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Quanjiao Nanda Optoelectronic Materials Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "quanjiao nanda optoelectronic materials ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenyang Xinyuan Microelectronic Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenyang xinyuan microelectronic equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Wuhan Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"wuhan naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi'an Naura Microelectronics Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi'an naura microelectronics equipment co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Precision Gas Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun precision gas co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Hefei Zhiwei Microelectronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"hefei zhiwei microelectronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shengmei Semiconductor Equipment (Beijing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shengmei semiconductor equipment (beijing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shenzhen SiCarrier Technologies Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shenzhen sicarrier technologies co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Xinsheng Jingtou Semiconductor Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai xinsheng jingtou semiconductor technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Zhichun Semiconductor Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai zhichun semiconductor equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Shanghai Radio Equipment Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "shanghai radio equipment institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sanya Rehabilitation And Convalescent Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sanya rehabilitation and convalescent center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "900th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "900th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hainan Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hainan hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Aikang Yicheng Medical Equipment Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing aikang yicheng medical equipment co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Weizhuo Zhiyuan Medical Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing weizhuo zhiyuan medical technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Libel Bioengineering Research Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing libel bioengineering research institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Xuanwu Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "xuanwu hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shanxi Jinsheng Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanxi jinsheng technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "904th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "904th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "980th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "980th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "923rd Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "923rd hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "920th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "920th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "901st Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "901st hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "960th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "960th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "924th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "924th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "989th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "989th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "909th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "909th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "903rd Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "903rd hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "964th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "964th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "988th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "988th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "926th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "926th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "928th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "928th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "922nd Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "922nd hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "987th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "987th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "921st Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "921st hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "967th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "967th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "The Affiliated Hospital of Jiangnan University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "the affiliated hospital of jiangnan university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Institute of Aviation Medicine",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "institute of aviation medicine"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Hainan Climate Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "hainan climate center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Freshwater Fisheries Research Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "freshwater fisheries research center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Tianjin Institute of Seawater Desalination and Multipurpose Utilization",
    "kind": "Ministry of Natural Resources",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "tianjin institute of seawater desalination and multipurpose utilization"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Zhengzhou Institute of Multipurpose Utilization of Mineral Resources",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zhengzhou institute of multipurpose utilization of mineral resources"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Strategic Warning Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "strategic warning institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Dental Hospital",
    "kind": "Military",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "dental hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Eastern Theater Command General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "eastern theater command general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Health and Epidemic Prevention Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "health and epidemic prevention institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Medical Center",
    "kind": "PLAGH",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "National Defense Technology Innovation Institute",
    "kind": "AMS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "national defense technology innovation institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Naval Characteristic Medical Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "naval characteristic medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southern Theater Command General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southern theater command general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Northern Theater Command General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "northern theater command general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Stomatological Hospital",
    "kind": "FMMU",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "stomatological hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air-breathing Hypersonic Technology Research Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "air-breathing hypersonic technology research center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "175th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "175th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Military Medical Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "military medical research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Navy Ship Repair Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "navy ship repair institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "73rd Army Group Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "73rd army group hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Oil Research Institute",
    "kind": "General Logistics Department",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "oil research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Ninth Hospital",
    "kind": "Joint Service Support Force",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ninth hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Sixth Medical Center",
    "kind": "PLAGH",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "sixth medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Military Region Center for Disease Control and Prevention",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing military region center for disease control and prevention"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "South China Institute of Biomedicine",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "south china institute of biomedicine"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Qinglian Baiao Biotechnology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing qinglian baiao biotechnology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Guizhou Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "guizhou medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "44th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "44th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Shuguang Rubber Industry Research and Design Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shuguang rubber industry research and design institute co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "59th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "59th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "159th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "159th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Military Equipment Research Institute",
    "kind": "General Logistics Department",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "military equipment research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Fifth Medical Center",
    "kind": "PLAGH",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "fifth medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Radar and Electronic Countermeasures Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "radar and electronic countermeasures research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Equipment Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "air force equipment research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Beijing Military Region General Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing military region general hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Air Force Special Medical Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "air force special medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "971st Hospital",
    "kind": "PLAN",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "971st hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Military Preventive Medical College",
    "kind": "TMMU",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "military preventive medical college"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "309th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "309th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Beijing Aerospace Yisen Wind Tunnel Engineering Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing aerospace yisen wind tunnel engineering technology co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "General Hospital of Xinjiang Military Region",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "general hospital of xinjiang military region"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Drug and Instrument Inspection Institute of Xinjiang Military Region",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "drug and instrument inspection institute of xinjiang military region"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "458th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "458th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "First Affiliated Hospital of PLA Military Medical University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "first affiliated hospital of pla military medical university"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "411th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "411th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "97th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "97th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Eighth Medical Center",
    "kind": "PLAGH",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "eighth medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "302nd Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "302nd hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "958th Hospital",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "958th hospital"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Drug and Instrument Supervision and Inspection Center",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "drug and instrument supervision and inspection center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Second Medical Center",
    "kind": "PLAGH",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "second medical center"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Southern Theater Command Center for Disease Control and Prevention",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "southern theater command center for disease control and prevention"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Military Veterinary Research Institute",
    "kind": "Quartermaster University of PLA\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"military veterinary research institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Military Veterinary Research",
    "kind": "PLA Quartermaster University\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"military veterinary research"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "PLA Quartermaster University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "pla quartermaster university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Aeronautics Computing Technique Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "aeronautics computing technique research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Aerospace Star Technology Application Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"aerospace star technology application co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Anhui Kehua Sci-Tech Trading Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"anhui kehua sci-tech trading co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Associated Opto-electronics (Chongqing) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"associated opto-electronics (chongqing) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Foundfresh Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing foundfresh technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Graphene Institute Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing graphene institute co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Guoke Tianxun Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing guoke tianxun technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chengdu Aircraft Design and Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chengdu aircraft design and research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Institute of Precision Mechatronics Control Equipment",
    "kind": "CALT",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing institute of precision mechatronics control equipment"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "China Aeronautical Radio Electronics Research Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "china aeronautical radio electronics research institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Chinese Academy of Sciences Technology and Engineering Center for Space Utilization",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "chinese academy of sciences technology and engineering center for space utilization"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Chongqing Southwest Integrated Circuit Design Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"chongqing southwest integrated circuit design co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Gyro Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"gyro technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Harbin Aerospace Star Data System Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"harbin aerospace star data system technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Jiangxi Hongdu Aviation Industry Group Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"jiangxi hongdu aviation industry group co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing Chunhui Technology Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing chunhui technology industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Nanjing Fiberglass Research and Design Institute",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "nanjing fiberglass research and design institute"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nanjing Panda Handa Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nanjing panda handa technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"National Inspection and Testing Holding Group Nanjing National Materials Testing Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"national inspection and testing holding group nanjing national materials testing co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Ningbo Institute of Materials Technology and Engineering",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "ningbo institute of materials technology and engineering"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ORICAS Import and Export (Beijing) Corporation",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "oricas import and export (beijing) corporation"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Physike Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"physike technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Scikro (Hong Kong) Instruments Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "scikro (hong kong) instruments limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Scikro (Shanghai) Instrument Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"scikro (shanghai) instrument co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shaanxi Aerospace Science and Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shaanxi aerospace science and technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Shanghai Aviation Electronic Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"shanghai aviation electronic co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Silk Road Trading Company Ltd.",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "silk road trading company ltd."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Singleton (Suzhou) Electronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"singleton (suzhou) electronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Space Star Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"space star technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Stratum FT Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "stratum ft limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou Changfeng Avionics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou changfeng avionics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suzhou SIP Hi-Tech Precision Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suzhou sip hi-tech precision electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Tianjin Aerospace Zhongwei Data System Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"tianjin aerospace zhongwei data system technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi’an Aerospace Automation Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi’an aerospace automation co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi’an Aerospace Tianhui Data Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi’an aerospace tianhui data technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi’an Sunward Aeromat Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi’an sunward aeromat co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi’an Xiangteng Microelectronics Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi’an xiangteng microelectronics technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Xi’an Xiangxun Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"xi’an xiangxun technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Zhejiang Aerospace Hengjia Data Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"zhejiang aerospace hengjia data technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Zibo Topred International Trading Company Limited",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "zibo topred international trading company limited"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Beijing Academy of Artificial Intelligence",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "beijing academy of artificial intelligence"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Beijing Innovation Wisdom Technology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"beijing innovation wisdom technology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Henan Dingxin Information Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"henan dingxin information industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Inspur (Beijing) Electronic Information Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"inspur (beijing) electronic information industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Inspur Electronic Information Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"inspur electronic information industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Inspur Electronic Information (Hong Kong) Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"inspur electronic information (hong kong) co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Inspur (HK) Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"inspur (hk) electronics co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Inspur Software Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"inspur software co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Nettrix Information Industry Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"nettrix information industry co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suma Techology Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suma techology co."
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "\"Suma-USI Electronics Co.",
    "kind": "Ltd.\"",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"suma-usi electronics co."
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Army Military Transportation University",
    "kind": "",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "army military transportation university"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "ATR Defense S&T Key Laboratory of Intelligent Information Processing",
    "kind": "SZU",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "atr defense s&t key laboratory of intelligent information processing"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Key Laboratory of Quantum Information",
    "kind": "CAS",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "key laboratory of quantum information"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Defense S&T Key Laboratory of Antennas and Microwave Technology",
    "kind": "Xidian University",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "defense s&t key laboratory of antennas and microwave technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Antenna Institute",
    "kind": "Xidian University",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "antenna institute"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Defense S&T Key Laboratory of Electronic Measurement Technology",
    "kind": "NUC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "defense s&t key laboratory of electronic measurement technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Defense S&T Key Laboratory of Signal Detection",
    "kind": "NUC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "defense s&t key laboratory of signal detection"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "State Key Laboratory for Electronic Measurement Technology",
    "kind": "NUC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "state key laboratory for electronic measurement technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"CETI 41st RI Key Laboratory for Electronic Measurement Technology\r\"",
    "kind": "NUC",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"ceti 41st ri key laboratory for electronic measurement technology\r\""
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Defense S&T Key Laboratory of High-Power Semiconductor Lasers",
    "kind": "CUST",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "defense s&t key laboratory of high-power semiconductor lasers"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "\"Defense S&T Key Laboratory of Lightweight",
    "kind": "High-strength Structural Materials\"",
    "securityCredentials": "CSU",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "\"defense s&t key laboratory of lightweight"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Defense S&T Key Laboratory of Multi-spectral Information Processing Technology",
    "kind": "HUST",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "defense s&t key laboratory of multi-spectral information processing technology"
  },
  {
    "riskRating": "HIGH",
    "countryCode": "CN",
    "institution": "Defense S&T Key Laboratory of Radar Signal Processing",
    "kind": "Xidian University",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "defense s&t key laboratory of radar signal processing"
  },
  {
    "riskRating": "MEDIUM",
    "countryCode": "CN",
    "institution": "Center for International Security and Strategy",
    "kind": "Tsinghua University",
    "securityCredentials": "",
    "endUserLists": "",
    "espionage": "",
    "normalizedName": "center for international security and strategy"
  }
];

/**
 * Get FIG entry by exact match (case-insensitive)
 */
export function getCNFigByName(institutionName: string): CNFigEntry | null {
  const normalized = institutionName.toLowerCase().trim();
  return CN_FIGS_MAP.get(normalized) || null;
}

/**
 * Statistics
 */
export const CN_FIGS_STATS = {
  total: 2024,
  high: 735,
  medium: 1289,
  low: 0,
  military: 67,
  defence: 13,
  civilian: 56,
  sevenSons: 7
};
