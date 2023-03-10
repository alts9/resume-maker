const userBio = { name: "Ellie Carter", jobTitle: "Production Manager" };

const phoneContact = {
  iconId: 0,
  iconName: "phone-icon",
  data: "+081 234 5678",
  link: "",
};

const emailContact = {
  iconId: 1,
  iconName: "envelope-icon",
  data: "elliecarter@mail.com",
  link: "",
};

const houseContact = {
  iconId: 2,
  iconName: "house-icon",
  data: "Austin, TX",
  link: "",
};

const linkedInContact = {
  iconId: 3,
  iconName: "linkedIn-icon",
  data: "/in/ellie_carter",
  link: "https://www.linkedin.com/in/John_john123",
};

const userContact = [phoneContact, emailContact, houseContact, linkedInContact];

const userProfile = {
  profileSummary:
    " Write few sentences about yourself. Start with years of experience or education. Put skills that will be able to contribute to the specific job. Bonus point if you have relevant particular specialty and achievement. Convince them you're the best choice. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
};

const education1 = {
  name: "Bachelor of Information Technology",
  institution: "Stanford University",
  yearStart: 2012,
  yearEnd: 2016,
};
const education2 = {
  name: "Master of Information Technology",
  institution: "Stanford University",
  yearStart: 2016,
  yearEnd: 2018,
};

const educationInfo = {
  type: "info",
  name: "education",
  items: [education1, education2],
};

const language1 = { name: "English", proficiency: "Native Speaker" };
const language2 = { name: "Spanish", proficiency: "Basic" };

const languageList = {
  type: "list",
  name: "language",
  proficiencyType: "level", //none/score/level
  items: [language1, language2],
};

const softSkillList = {
  type: "list",
  name: "softSkill",
  proficiencyType: "none", //none/score/level
  items: [
    "Project management",
    "Problem-solving",
    "Critical thinking",
    "Decision making",
  ],
};

const software1 = { name: "Microsoft Word", proficiency: "4" };
const software2 = { name: "Microsoft Excel", proficiency: "2" };

const softwareList = {
  type: "list",
  name: "software",
  proficiencyType: "score", //none/score/level
  items: [software1, software2],
};

const experience1 = {
  jobTitle: "Junior Programmer",
  companyName: "ABC Corp",
  location: "New York",
  yearStart: "2016",
  yearEnd: "2018",
  jobSummary: "Create secure and functional code",
  jobDetails: [
    "Formulate program specifications and basic prototypes",
    "Integrate individual software solutions to higher level systems",
    "Use web-based tools to create advanced SaaS when applicable",
  ],
};

const experience2 = {
  jobTitle: "Senior Programmer",
  companyName: "WWW Corp",
  location: "New York",
  yearStart: "2016",
  yearEnd: "2018",
  jobSummary: "Create secure and functional code",
  jobDetails: [
    "Formulate program specifications and basic prototypes",
    "Integrate individual software solutions to higher level systems",
    "Use web-based tools to create advanced SaaS when applicable",
  ],
};

const experience = { type: "experience", items: [experience1, experience2] };

const reference1 = {
  name: "David",
  jobTitle: "Senior Programmer",
  companyName: "Company ABC",
  phone: "0811111111",
  email: "david@mail.com",
};

const reference2 = {
  name: "John",
  jobTitle: "Junior Programmer",
  companyName: "Company BCD",
  phone: "0811111111",
  email: "john@mail.com",
};

const references = { type: "reference", items: [reference1, reference2] };

const userResume = {
  bio: userBio,
  contact: userContact,
  profile: userProfile,
  leftContents: [educationInfo, languageList, softSkillList, softwareList],
  rightContents: [experience, references],
};

const contactTemplate = {
  iconId: 2,
  iconName: "house-icon",
  data: "Contact data",
  link: "",
};

const infoTemplate = {
  name: "Put Degree/ Achievement/ Certification Here",
  institution: "Stanford University",
  yearStart: 20,
  yearEnd: 20,
};

const listProficiencyTemplate = { name: "Item Name", proficiency: "Beginner" };

const listBasicTemplate = "Item Name";

const listScoreTemplate = { name: "Item Name", proficiency: "4" };

const experienceTemplate = {
  jobTitle: "Senior Programmer",
  companyName: "WWW Corp",
  location: "New York",
  yearStart: "2016",
  yearEnd: "2018",
  jobSummary: "Create secure and functional code",
  jobDetails: [
    "Formulate program specifications and basic prototypes",
    "Integrate individual software solutions to higher level systems",
  ],
};

const experienceListTemplate =
  "Formulate program specifications and basic prototypes";

const referenceTemplate = {
  name: "John",
  jobTitle: "Junior Programmer",
  companyName: "Company BCD",
  phone: "0811111111",
  email: "john@mail.com",
};

const objectTemplate = {
  contactTemplate,
  infoTemplate,
  listProficiencyTemplate,
  listBasicTemplate,
  listScoreTemplate,
  experienceTemplate,
  experienceListTemplate,
  referenceTemplate,
};
export { userResume, objectTemplate };
