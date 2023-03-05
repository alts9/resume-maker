const userBio = { name: "Ellie Carter", jobTitle: "Production Manager" };

const phoneContact = {
  id: 0,
  iconid: 0,
  iconName: "phone-icon",
  data: "+081 234 5678",
  link: "",
};

const emailContact = {
  id: 1,
  iconid: 1,
  iconName: "envelope-icon",
  data: "elliecarter@mail.com",
  link: "",
};

const houseContact = {
  id: 2,
  iconid: 2,
  iconName: "house-icon",
  data: "Austin, TX",
  link: "",
};

const linkedInContact = {
  id: 3,
  iconid: 3,
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

const userResume = {
  bio: userBio,
  contact: userContact,
  profile: userProfile,
  leftContent: [educationInfo],
};

// console.log(userResume);

export { userResume };
