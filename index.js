const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title:",
        },
        {
            type: "editor",
            name: "description",
            message: "Project Description:",
        },
        {
            type: "",
            name: "",
            message: "",
        },
        {
            type: "",
            name: "",
            message: "",
        },
        {
            type: "",
            name: "",
            message: "",
        },
        {
            type: "",
            name: "",
            message: "",
        },
        {
            type: "",
            name: "",
            message: "",
        },
        {
            type: "",
            name: "",
            message: "",
        },
        {
            type: "",
            name: "",
            message: "",
        },
    ])
    .then((response) => {

    })