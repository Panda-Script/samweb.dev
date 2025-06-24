import mainmenu from "../images/mainmenutextbased.png";
import spells from "../images/spells.png";
import sqldatabase from "../images/MySQLDatabase.png";
export const cardData = [
  {
    title: "Python Text-Based Game",
    text: "A text-based game that plays sort of like DND. Currently, it only has the main menu and character loading finished.",
    image: mainmenu,
    links: [
      {
        label: "Code",
        url: "https://github.com/trashpanda20/DND-Text-based-Game",
      },
    ],
  },
  {
    title: "Python Spells Webscraper",
    text: "Webscraper that pulls all the spells from DND off the Wiki 5E site. It first finds all the links on the page. I then go in and edit out what I didn't want, then had it parse all the links to upload the information into a csv file.",
    image: spells,
    links: [
      {
        label: "Code",
        url: "https://github.com/trashpanda20/Python-Exercises/tree/main/webscraper",
      },
    ],
  },
  {
    title: "SQL Database",
    text: "For class, I created a MySQL database to list all the classes within the Majors of my department. It then listed Faculty and made-up students. I had it do relationships between faculty and the courses to tell who taught what.",
    image: sqldatabase,
    links: [
      {
        label: "Code",
        url: "https://github.com/trashpanda20/SQL-Database-for-CS440",
      },
    ],
  },
  {
    title: "Photograhy Website",
    text: "For my final in my webdevelopment class, we had to create a website using HTML, CSS, and Javascript. I created a photography website, but unfortunately, all of the photos were lost. I have all of the code, but it will take some more time to get it deployed onto it's own page.",
    links: [
      {
        label: "Home Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/homepg.htm",
      },
      {
        label: "Info Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/infopg.htm",
      },
      {
        label: "Blog Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/blog.htm",
      },
      {
        label: "Gallery Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/gallery.htm",
      },
      {
        label: "About Me Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/aboutme.htm",
      },
    ],
  },
  {
    title: "Book Club Website",
    text: "As a group project, my partner and I decided to create a book club website with a home page, and two genre pages for recommendations. Unfortunately, the pictures for this are gone as well, but i will find them again for uploading.",
    links: [
      {
        label: "Book Club Home Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/Books1.htm",
      },
      {
        label: "Thriller Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/Thriller.htm",
      },
      {
        label: "Historical Fiction Page Code",
        url: "https://github.com/Panda-Script/samweb.dev-pasts/blob/main/anc-code/HisFict.htm",
      },
    ],
  },
  {
    title: "This website!",
    text: "This website was coded by me in React.",
    links: [
      {
        label: "Code for this website",
        url: "https://github.com/trashpanda20/samweb.dev/tree/main",
      },
    ],
  },
];
