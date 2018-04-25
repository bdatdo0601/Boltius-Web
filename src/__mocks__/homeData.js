import moment from "moment";

export default Object.freeze({
    basics: {
        title: "Wentworth Student Government",
        shortenedTitle: "WITSG",
        mission:
            "The purpose of Wentworth Student Government is to act as a conduit between the students, faculty, and staff of Wentworth Institute of Technology; to encourage responsibility through democratic self‐governance; to work with the administration to influence educational programs, student life, and administrative management of the Institute; and to further the interests of the student body.",
        slogan: "Your Voice, Our Mission",
        logo: {
            src: "https://cpb-us-e1.wpmucdn.com/sites.wit.edu/dist/0/158/files/2016/02/Untitled7.png",
            alt: "logo",
        },
        socialProfiles: [],
    },
    eboards: [
        {
            key: "president",
            title: "President",
            description:
                "Act as a spokesperson for the student body. Responsible for facilitating all internal communication. Chair Executive Board and Board meetings. Set goals for WSG. Act as a liaison to other colleges. Prepare an agenda for Board and Executive Board meetings. Call a special meeting of the Executive Board when a matter is imperative and cannot wait until the next Board meeting. Call open meetings of the Executive Board. Plan the WSG retreat.",
            currentUser: "joaniss",
        },
        {
            key: "viceprez",
            title: "Vice President",
            description:
                "Act as the President when the President is not present. Set goals for WSG. Act as a liaison to other Wentworth organizations. Plan the WSG retreat. Prepare updates for Executive Board meetings. Oversee the Student Affairs Officer, the Business Affairs Officer, and the Academic Affairs Officer.",
            currentUser: "dod2",
        },
    ],
    faqs: [
        {
            question: "Do I need any experience to join?",
            answer:
                "Nope! We have members from all sorts of backgrounds, from no experience to having served on governments in high school.",
        },
        {
            question: "How much commitment is needed?",
            answer:
                "All we ask is an hour of your time on Monday nights (6pm – 7pm). However if you want to be more involved there are many opportunities!",
        },
        {
            question: "Are there any fees?",
            answer: "Not at all!",
        },
        {
            question: "Is Student Government for me?",
            answer: "Student Government is for every student on campus, stop by a meeting and see how you like it!",
        },
    ],
    accomplishments: [
        {
            key: "water refill",
            description:
                "Installation of a water bottle refill station in Beatty Hall cafe and in the Schumann fitness center.",
            completedDate: moment("2015").format("YYYY"),
        },
        {
            key: "cell phone charging",
            description: "Cellphone charging station in the Flanagan campus center.",
            completedDate: moment("2015").format("YYYY"),
        },
        {
            key: "water refill",
            description:
                "Installation of a water bottle refill station in Beatty Hall cafe and in the Schumann fitness center.",
            completedDate: moment("2015").format("YYYY"),
        },
        {
            key: "Gender Neutral housing",
            description:
                "Hosted an open forum with the Office of Housing and Residential Life where students learned of the new Gender Neutral Housing options.",
            completedDate: moment("2015").format("YYYY"),
        },
        {
            key: "EPIC Initiative",
            description:
                "Hosted an open forum with the Provost, Dr. Russell Pinizzotto, where students and faculty learned about the new E.P.I.C. initiative.",
            completedDate: moment("2015").format("YYYY"),
        },
        {
            key: "Chartwells Concern",
            description:
                "Hosted an open forum with Chartwells where students were able to voice their concerns and ideas to help improve campus dining.",
            completedDate: moment("2015").format("YYYY"),
        },
        {
            key: "handsanitizer",
            description: "Installation of hand sanitizers at every residence hall elevator lobby.",
            completedDate: moment("2014").format("YYYY"),
        },
        {
            key: "beattyTV",
            description: "Student input into the design of the new Flannagan Campus Center.",
            completedDate: moment("2014").format("YYYY"),
        },
        {
            key: "laptop upgrade",
            description: "Re-Upgrade of Lenovo Laptops from T-Series to W-Series.",
            completedDate: moment("2014").format("YYYY"),
        },
        {
            key: "foodoptions",
            description: "Changes in service and food options in the Beatty Hall Cafeteria.",
            completedDate: moment("2014").format("YYYY"),
        },
        {
            key: "mission hill",
            description:
                "Various goodwill events such as Mission Hill Street Cleanup and raising money for the Jimmy Fund.",
            completedDate: moment("2014").format("YYYY"),
        },
        {
            key: "student org centraization",
            description: "Centralization of student club organization through SLP and OrgSync.",
            completedDate: moment("2014").format("YYYY"),
        },
    ],
});
