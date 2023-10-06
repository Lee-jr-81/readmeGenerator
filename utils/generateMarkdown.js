//
// CREATE A FUNCTION TO GENERATE A LICENSE BADGE
//
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![Github license] (https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};
// function to render license link
const renderLicenseLink = (license) => {
  if (license !== "None") {
    return `* [License] (#license)\n`;
  }
  return "";
};

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)};

  ### Description

  ${data.description}

  ### Table of Contents

  * [Installation] (#installation)

  * [Usage] (#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing] (#contributing)

  * [Test] (#tests)

  * [Questions] (#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}



`;
}

module.exports = generateMarkdown;
