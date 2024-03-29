export const getHomeMessage = () => {
  const allMessages = [
    "Research in the Advanced Bioanalytical laboratory is primarily in the broad area of analytical chemistry and sensing engineering. Within our research program, we develop rapid detection methods for trace amount target compounds to resolve urgent chronic issues that appeared in a variety of fields. We seek to engineer innovative sensor systems and devices to highly enhance the detection capabilities on different scales. Many of our previous projects were focused on the development of frontier analytical tools for both macro- and micro-scale multimetric sensing. These achievements and findings will be subsequently applied to other bioanalytical issues, including but not limited to, food safety, environmental contaminants, biomedical applications and so on.",
    "We believe in combinatorial and innovative bioanalytic approaches. State-of-the-art analytical instruments, such as gas chromatography-mass spectrometry (GC-MS), ultra-high performance liquid chromatography and tandem mass spectrometry (UHPLC-MS/MS) and so on, are used for comprehensive sample analysis. Moreover, cutting-edge sensor systems are under development for high-resolution spatial and temporal monitoring of targeted molecules, physicochemical parameters, oscillatory transient signals, and so on.",
  ];

  return allMessages;
};

const SERVER_ORIGIN = "";

const newsUrl = `${SERVER_ORIGIN}/News`;

export const getNews = async () => {
  return await fetch(newsUrl, { method: "GET" }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get news");
    }
    return response.json();
  });
};

const memberUrl = `${SERVER_ORIGIN}/Member`;

export const getMembers = async () => {
  return await fetch(memberUrl, { method: "GET" }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get news");
    }
    return response.json();
  });
};
