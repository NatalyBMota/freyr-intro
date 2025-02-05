document.addEventListener("DOMContentLoaded", () => {
  function getdateSpelledOutFromDateObject(dateObj) {
    const monthSpelledOut = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let creationDate = dateObj.getDate();
    let creationMonth = dateObj.getMonth();
    let creationYear = dateObj.getFullYear();
    return `${monthSpelledOut[creationMonth]} ${creationDate}, ${creationYear}`;
  };
  function populateProjectSection(repositories){
    console.log('GitHub Repository Data:')
    console.log(repositories[0]);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');
    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement('li');
      project.className = 'projectListItems';
      let repositoryURL = repositories[i].html_url;
      let repositoryName = repositories[i].name;
      let repositoryDateOfCreation = new Date(repositories[i].created_at);
      let creationDate = getdateSpelledOutFromDateObject(repositoryDateOfCreation);
      let subList = document.createElement("ul");
      subList.className = 'subListOfInnerList2';
      let description_li = document.createElement('li');
      description_li.className = 'description-li';
      let dateOfCreation_li = document.createElement('li');
      project.innerHTML = `<a href='${repositoryURL}' target='_blank' class='projectsSectionLinks'>${repositoryName}<span class="hideable">:</span></a> `;
      let descriptionStrong = document.createElement('strong');
      descriptionStrong.innerText = 'Description: ';
      description_li.appendChild(descriptionStrong);
      let descriptionTextNode = document.createTextNode(`
        ${repositories[i].description}
      `);
      description_li.appendChild(descriptionTextNode);
      dateOfCreation_li.innerHTML = `<strong>Date of Creation:</strong> ${creationDate}`;
      subList.appendChild(description_li);
      subList.appendChild(dateOfCreation_li);
      project.appendChild(subList);
      projectList.appendChild(project);
    }
  };
  
  fetch('https://api.github.com/users/NatalyBMota/repos')
    .catch(error => console.log('There was an error with getting data from the GitHub API.', error))
    .then(response => response.json())
    .catch(error => console.log('There was an error with parsing the response GitHub API\'s response data into JSON.', error))
    .then((repositories) => populateProjectSection(repositories))
    .catch(err => console.log('There was an error with processing data from the GitHub API.', err));
  
  let skills = [
    "Wireframing",
    "Prototyping",
    "Hand-coding HTML 4.0",
    "Hand-coding XHTML",
    "Some HTML 5",
    "Hand-Coding CSS",
    "Familiarity with CSS Grid",
    "Learning CSS Flex-box",
    "W3C Validation",
    "Some JavaScript",
    "Basic Debugging",
    "Basic DOM Manipulation",
    "Intermediate ActionScript",
    "Learning Git",
    "Learning GitBash",
    "Learning Git with GitHub",
    "Quality Testing",
    "Introductory User Research",
    "Usability Testing",
    "Section 508 Compliance",
    "Website Accessibility",
    "Cross-Browser Compatibility",
    "Exposure to C#",
    "Exposure to Python",
    "Exposure to Java",
    "Familiarity with JDBC",
    "Exposure to PHP",
    "Exposure to Server-Side Scripting",
    "Exposure to MySQL database",
    "Exposure to MariaDB",
    "Exposure to phpMyAdmin",
    "Exposure to HeidiSQL",
    "Exposure to WAMP and LAMP",
    "Intermediate SQL",
    "Learning VS Code",
    "Familiarity with Development Platforms",
    "Familiarity with Code Editors",
    "Familiarity with CodePen and Replit",
    "Familiarity with IDEs",
    "Familiarity with PyCharm",
    "Familiarity with IntelliJ IDEA",
    "Familiarity with the Windows CLIs",
    "Familiarity with MSDOS",
    "Familiarity with PowerShell",
    "Familiarity with the Linux terminal",
    "Some Knowledge of Linux Commands",
    "Embedding Video and Audio",
    "Windows Workstation Administration",
    "Windows OS Maintenance",
    "Windows XP, 7, 10, and 11",
    "Mac OS X",
    "Fedora Linux",
    "Ubuntu Linux",
    "Installing Some Operating Systems",
    "Installing OSs for Dual-Booting",
    "Installing OSs Within Oracle VM",
    "Performing Basic Computer Troubleshooting and Maintenance on Workstations",
    "Organizational Abilities",
    "Problem Solving Abilities",
    "Service Orientations",
    "Growth Mindset",
    "Desire to Learn",
    "Aptitude for Acquiring Technical Skills",
    "Microsoft Office 365",
    "MS Office 2010, 2013 and 2016",
    "Knowledge of Many Computer Applications",
    "Some Knowledge of Cybersecurity",
    "Knowledge of Antivirus Software",
    "Knowledge of Anti-Malware Software",
    "Knowledge of Anti-Spyware Software",
    "Knowledge of Firewall Software",
    "Digital Scheduling Skills",
    "Microsoft Outlook Calendar",
    "Gmail Calendar",
    "Near-Native English Skills",
    "Highly Fluent English",
    "Bi-Lingual",
    "Native Portuguese Skills",
    "Beginning Level Spanish",
    "Written Communication Skills",
    "Verbal Communication Skills",
    "Effective Communication Skills",
    "Documentation Writing",
    "Developing Personas for Use Cases",
    "Technical Writing",
    "Information Architecture",
  ];
  let skillsSection = document.getElementById("skills");
  let skillsList = skillsSection.querySelector("ul");
  let messageSection = document.getElementById("messages");
  messageSection.style.display = "none";

  for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    let skillWrapperDiv = document.createElement("div");
    skill.innerText = `${skills[i]}`;
    skillWrapperDiv.appendChild(skill);
    skillsList.appendChild(skillWrapperDiv);
  }

  function placeCopyrightNotice() {
    let today = new Date();
    var thisYear = today.getFullYear();
    // footer = document.querySelector('footer');
    let copyrightSection = document.getElementById("copyright");
    let copyrightNotice = document.createElement("p");
    copyrightNotice.innerHTML = `&copy; Nataly Mota ${thisYear}`;
    // footer.appendChild(copyrightNotice);
    copyrightSection.appendChild(copyrightNotice);
  }
  placeCopyrightNotice();

  let messageForm = document.querySelector("form[name='leave_message']");
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    messageSection.removeAttribute("style");
    /*
        The above line of code right now has the same effect as the line of code below. It makes the message section visible once again. However, if more styles were added to the messageSection element, the line of code below would not remove them, in order to make the display of this element as visible one more time.
        messageSection.style.display = '';
    */

    function getValueOfFormField(formFieldName) {
      let fieldName = event.target[formFieldName];
      let fieldValue = fieldName.value;
      return fieldValue;
    }

    function getValueOfFormFieldAndTrimIt(formFieldName) {
      let formFieldData = getValueOfFormField(formFieldName);
      formFieldData = formFieldData.trim();
      return formFieldData;
    }

    let name = getValueOfFormFieldAndTrimIt("usersName");
    let email = getValueOfFormFieldAndTrimIt("usersEmail");
    let message = getValueOfFormFieldAndTrimIt("usersMessage");

    let createSpanWithMessage = (userMessage) => `<span>${userMessage}</span>`;

    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    //newMessage.innerHTML = `<strong><a href='mailto:${email}'>${name}</a> wrote:</strong> <span>${message}</span>`;
    let startingFlexItems = document.createElement('div');
    startingFlexItems.id = "startingFlexItems";
    /*
    newMessage.innerHTML = `<strong><a href='mailto:${email}'>${name}</a> 
                            wrote:</strong>&nbsp ${createSpanWithMessage(message)}</div>`;
    */
    startingFlexItems.innerHTML = `<strong><a href='mailto:${email}'>${name}</a> 
                            wrote:</strong>&nbsp ${createSpanWithMessage(message)}</div>`;
    
    function createButton(buttonText) {
      let typeOfButton = document.createElement("button");
      typeOfButton.innerText = buttonText;
      typeOfButton.type = "button";
      return typeOfButton;
    }
    let endingFlexItems = document.createElement('div');
    endingFlexItems.id = "endingFlexItems";
    /*
      The append method will let you add more than one node to a parent element, provided that you add them all as arguments at once. I tried calling the append method twice on the same parent element, and it did not work. Yet, the following code works for adding two elements to newMessage.
      endingFlexItems.innerText = 'Test';
      newMessage.append(startingFlexItems, endingFlexItems);
    */
    newMessage.appendChild(startingFlexItems);
    newMessage.appendChild(endingFlexItems);

    function createButtonAndAppendIt(buttonText) {
      let typeOfButton = createButton(buttonText);
      /* newMessage is a variable storing a list item, which is inside of the ul that is stored in the variable messageList. endingFlexItems is a div, which is meant to contain the buttons */ 
      endingFlexItems.appendChild(typeOfButton);
      //newMessage.appendChild(endingFlexItems);
      //newMessage.appendChild(typeOfButton);
      return typeOfButton;
    }

    let editButton = createButtonAndAppendIt("Edit");
    editButton.id = "edit-btn";
    let saveButton = createButton("Save");
    saveButton.id = "save-btn";
    let removeButton = createButtonAndAppendIt("Remove");
    removeButton.id = "remove-btn";
    /*
            The above code is the same as the following code, in a refactored form:

            let editButton = document.createElement('button');
            editButton.innerText = "edit";
            editButton.type = "button";
            endingFlexItems.appendChild(editButton);
            newMessage.appendChild(endingFlexItems);

            let removeButton = document.createElement('button');
            removeButton.innerText = "remove";
            removeButton.type = "button";
            endingFlexItems.appendChild(removeButton);
            newMessage.appendChild(endingFlexItems);
        */

    //editButton.style.margin = '0 .4rem 0 3rem';

    messageList.appendChild(newMessage);

    removeButton.addEventListener("click", () => {
      let entry = removeButton.parentNode.parentNode;
      /*
          The variable entry is a list item (li), which is the element that is 
          the grandparent of the editButton. The editButton's parent is now the 
          div that is stored in the variable endingFlexItems. The variable entry is
          an alias for the newMessage variable, which stores that same list item. 
          
          That list item's parent is the unordered list (ul), which is stored in the 
          variable messageList.
          
          The ul's parent is the section element with the id of messages.
      */
      let numOfListItems = messageList.childElementCount;
      entry.remove();
      if (numOfListItems === 1) {
        messageSection.style.display = "none";
      }
    });

    editButton.addEventListener("click", () => {
      saveButton.style.display = "";
      /*
        The span element is now inside of the div that is stored in the startingFlexItems
        variable, and not in the list item that is stored in the variable newMessage anymore. So, the following, commented out line of code no longer applies:

        let messageContainerSpan = newMessage.getElementsByTagName("span")[0];
      */
      let messageContainerSpan = startingFlexItems.getElementsByTagName("span")[0];
      let messageText = messageContainerSpan.textContent;
      messageContainerSpan.textContent = "";

      let editInputField = document.createElement("input");
      editInputField.type = "text";
      editInputField.id = "editInputField";
      editInputField.value = messageText;
      //newMessage.insertBefore(editInputField, editButton);
      //startingFlexItems.insertBefore(messageContainerSpan, editInputField);
      //messageContainerSpan.append(editInputField);
      messageContainerSpan.insertAdjacentElement('afterend', editInputField);
      endingFlexItems.insertBefore(saveButton, removeButton);
      //newMessage.insertBefore(saveButton, removeButton);
      editButton.style.display = "none";
      //editButton.remove();
    });

    saveButton.addEventListener("click", () => {
      editButton.style.display = "";
      let messageContainerSpan = startingFlexItems.getElementsByTagName("span")[0];
      //let messageContainerSpan = newMessage.getElementsByTagName("span")[0];
      let editInputField = document.getElementById("editInputField");
      let messageText = editInputField.value;
      // console.log(messageContainerSpan);
      messageContainerSpan.innerHTML = createSpanWithMessage(messageText);

      editInputField.remove();

      //let editButton = createButton('edit');
      //newMessage.insertBefore(editButton, removeButton);
      //newMessage.append(editButton);
      endingFlexItems.insertBefore(editButton, removeButton);
      //removeButton.prepend(editButton);
      saveButton.style.display = "none";
      //saveButton.remove();
    });
    messageForm.reset();
  });
});