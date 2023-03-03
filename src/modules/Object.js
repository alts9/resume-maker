class Bio {
  constructor(name, jobTitle, contact) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.contact = contact;
  }
}

class ContactItem {
  constructor(id, icon, data, link) {
    this.id = id;
    this.icon = icon;
    this.data = data;
    this.link = link;
  }
}

class Profile {
  constructor(profileSummary) {
    this.profileSummary = profileSummary;
  }
}

class Info {
  constructor(infoName, infoItems) {
    this.infoName = infoName;
    this.infoItems = infoItems;
  }
}

class List {
  constructor(listName, listItems) {
    this.listName = listName;
    this.listItems = listItems;
  }
}

class Experience {
  constructor(
    jobTitle,
    companyName,
    location,
    yearStart,
    yearFinish,
    jobSummary,
    jobDetails
  ) {
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.location = location;
    this.yearStart = yearStart;
    this.yearFinish = yearFinish;
    this.jobSummary = jobSummary;
    this.jobDetails = jobDetails;
  }
}

class Reference {
  constructor(name, jobTitle, companyName, phone, email) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.phone = phone;
    this.email = email;
  }
}

class Resume {
  constructor(bio, contact, profile, info, list, experience) {
    this.bio = bio;
    this.contact = contact;
    this.profile = profile;
    this.info = info;
    this.list = list;
    this.experience = experience;
  }
}

export { Resume, ContactItem, Bio, Profile, Info, List, Experience, Reference };
