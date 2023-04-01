const userBio = { name: "John Smith", jobTitle: "Front End Developer" };

const phoneContact = {
  iconId: 8,
  iconName: "phone-icon",
  data: "+081 234 5678",
  link: "",
};

const emailContact = {
  iconId: 2,
  iconName: "envelope-icon",
  data: "john_smith@mail.com",
  link: "",
};

const houseContact = {
  iconId: 5,
  iconName: "house-icon",
  data: "San Francisco, CA",
  link: "",
};

const linkedInContact = {
  iconId: 7,
  iconName: "linkedIn-icon",
  data: "/in/john_smith",
  link: "https://www.linkedin.com/in/John_john123",
};

const userContact = [phoneContact, emailContact, houseContact, linkedInContact];

const userProfile = {
  profileSummary:
    "Write a few sentences about yourself. Start with years of experience or education. Put skills that will be able to contribute to the specific job. Bonus points if you have relevant specialties and achievements. Convince them you're the best choice. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
};

const education1 = {
  name: "Bachelor of Information Technology",
  institution: "University Name",
  yearStart: 2012,
  yearEnd: 2016,
};

const educationInfo = {
  type: "info",
  name: "education",
  items: [education1],
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
  items: ["Project management", "Problem-solving", "Decision making"],
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
  jobTitle: "Job Title Here",
  companyName: "Company Name",
  location: "Location",
  yearStart: "20XX",
  yearEnd: "20XX",
  jobSummary:
    "Put a brief summary of your duties in this paragraph and highlight details in the bullet list. Be accurate and concise. Remember: You are trying to show that your experience from previous jobs makes you ideal for this one.",
  jobDetails: [
    "Formulate program specifications and basic prototypes",
    "Integrate individual software solutions to higher level systems",
    "Use web-based tools to create advanced SaaS when applicable",
  ],
};

const experience2 = {
  jobTitle: "Job Title Here",
  companyName: "Company Name",
  location: "Location",
  yearStart: "20XX",
  yearEnd: "20XX",
  jobSummary:
    "Put a brief summary of your duties in this paragraph and highlight details in the bullet list. Be accurate and concise. Remember: You are trying to show that your experience from previous jobs makes you ideal for this one.",
  jobDetails: [
    "Formulate program specifications and basic prototypes",
    "Integrate individual software solutions to higher level systems",
    "Use web-based tools to create advanced SaaS when applicable",
  ],
};

const experience = { type: "experience", items: [experience1, experience2] };

const reference1 = {
  name: "Put Name Here",
  jobTitle: "Job Title",
  companyName: "Company Name",
  phone: "081-234-5678",
  email: "reference@mail.com",
};

const reference2 = {
  name: "Put Name Here",
  jobTitle: "Job Title",
  companyName: "Company Name",
  phone: "081-234-5678",
  email: "reference@mail.com",
};

const references = { type: "reference", items: [reference1, reference2] };

const defaultResume = {
  bio: userBio,
  contact: userContact,
  profile: userProfile,
  leftContents: [educationInfo, languageList, softSkillList, softwareList],
  rightContents: [experience, references],
};

const contactTemplate = {
  iconId: 8,
  iconName: "phone-icon",
  data: "Contact data",
  link: "",
};

const infoItemTemplate = {
  name: "Put Degree/ Achievement/ Certification Here",
  institution: "Stanford University",
  yearStart: "20XX",
  yearEnd: "20XX",
};

const infoTemplate = {
  type: "info",
  name: "Info Name",
  items: [infoItemTemplate],
};

const listProficiencyItemTemplate = {
  name: "List item",
  proficiency: "Beginner",
};

const listProficiencyTemplate = {
  type: "list",
  name: "List Name",
  proficiencyType: "level", //none/score/level
  items: [listProficiencyItemTemplate],
};

const listBasicTemplate = {
  type: "list",
  name: "List Name",
  proficiencyType: "none", //none/score/level
  items: ["List item"],
};

const listScoreItemTemplate = { name: "List item", proficiency: "4" };

const listScoreTemplate = {
  type: "list",
  name: "List name",
  proficiencyType: "score", //none/score/level
  items: [listScoreItemTemplate],
};

const experienceItemTemplate = {
  jobTitle: "Job Title Here",
  companyName: "Company Name",
  location: "Location",
  yearStart: "20XX",
  yearEnd: "20XX",
  jobSummary:
    "Put a brief summary of your duties in this paragraph and highlight details in the bullet list. Be accurate and concise. Remember: You are trying to show that your experience from previous jobs makes you ideal for this one.",
  jobDetails: [
    "Put some details about your job here.",
    "Put some details about your job here.",
  ],
};

const experienceTemplate = {
  type: "experience",
  items: [experienceItemTemplate],
};

const experienceListTemplate = "Put some details about your job here.";

const referenceItemTemplate = {
  name: "Put Name Here",
  jobTitle: "Job Title",
  companyName: "Company Name",
  phone: "081-234-5678",
  email: "john@mail.com",
};

const referenceTemplate = {
  type: "reference",
  items: [referenceItemTemplate],
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
export { defaultResume, objectTemplate };
