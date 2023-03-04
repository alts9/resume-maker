import {
  Resume,
  ContactItem,
  Bio,
  Profile,
  Info,
  List,
  Experience,
  Reference,
} from "./Object";

let phoneContact = new ContactItem(0, 0, "phone-icon", "+081 234 5678", "");
let emailContact = new ContactItem(
  1,
  1,
  "envelope-icon",
  "JohnJohn@mail.com"
);
let addressContact = new ContactItem(2, 2, "house-icon", "Austin, TX", "");
let linkedInContact = new ContactItem(
  3,
  3,
  "linkedIn-icon",
  "John_john123",
  "https://www.linkedin.com/in/John_john123"
);

// let userBio = new Bio("John", "Programmer", [
//   phoneContact,
//   emailContact,
//   addressContact,
//   linkedInContact,
// ]);

let userBio = new Bio("Ellie Carter", "Production Manager");

let userContact = [phoneContact, emailContact, addressContact, linkedInContact];

let userProfile = new Profile(
  "I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects."
);

let educationInfo = new Info("Education", [
  {
    name: "Bachelor of Information Technology",
    institution: "Stanford University",
    yearStart: 2012,
    yearEnd: 2016,
  },
  {
    name: "Master of Information Technology",
    institution: "Stanford University",
    yearStart: 2016,
    yearEnd: 2018,
  },
]);

let skillList = new List("Skill", [
  ["Microsoft Word", "Beginner"],
  ["Microsoft Excel", "Intermediate"],
  ["Microsoft PowerPoint", "Intermediate"],
]);

let userExperience1 = new Experience(
  "Junior Programmer",
  "ABC Corp",
  "new York",
  2016,
  2018,
  "Create secure and functional code",
  [
    "Formulate program specifications and basic prototypes",
    "Integrate individual software solutions to higher level systems",
    "Use web-based tools to create advanced SaaS when applicable",
  ]
);

let userReference1 = new Reference(
  "David",
  "Senior Programmer",
  "Company ABC",
  "0811111111",
  "david@mail.com"
);

let userResume = new Resume(
  userBio,
  userContact,
  userProfile,

  [educationInfo]
  // [skillList],
  // [userExperience1],
  // [userReference1]
);

// console.log(userResume);

export { userResume };
