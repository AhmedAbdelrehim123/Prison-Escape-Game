const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = 0;
      }
  }, 1000);
}

window.onload = function () {
  var time = 60 * 5, 
      display = document.querySelector('#countdownClock');
  startTimer(time, display);
};

const textNodes = [
  {
    id: 1,
    text: 'You wake up in your locked cell. Realising the longer you stay here the more complicated your prison life will become. \n' +
          'What do you do?',
    options: [
      {
        text: 'Do Nothing ',
        
        nextText: 2
      },
      {
        text: 'Make a Lockpick',
        nextText: 3 
      },
      {
        text: 'Fake an illness',
        nextText: 4
      }
    ]
},
//----------------------------------------
{
  id: 4,
  text: 'You believe that if you can fake an illness you will be able to escape your cell \n'+
        'How will you do that?',
  options: [
    {
      text: 'Start Coughing and do not stop',
      nextText: 5
    },
    {
        text:"Call the guards over saying you don't feel so good",
        nextText: 6
    },
    {
        text:"Make yourself vomit",
        nextText: 7
    }
  ]
},
{
    //---------------------
   id: 5,
   text:'You grab the attention of the guards and\n' +
        'Start to cough up blood then you pass out from not getting enough oxygen\n' +
        'Now you wake up to find yourself in the dimly lit medical room\n'+
        "Eyes half open, you just about see a code with multiple letter A's on the nurse's keycard",
   options: [
       {
           text:'Look around',
           nextText:8
       },
   ]
},
{
    id: 8,
    text:"You see a locked door but can't make out anything else\n" +
         'You notice that the door has a password to unlock it with\n'+
         "You rush to the door attempting to open it",
    options: [
        {
            text:'256a89ZQF',
            nextText:9
        },
        {
            text:'80TqGL72a',
            nextText:9
        },
        {
            text:'Aw345a6t5',
            nextText:10
        },
        {
            text:'6YU998aQw',
            nextText:9
        },
    ]
 },
 {
    id: 9,
    text: 'Sadly it was the incorrect password\n'+
         'Forcing yourself to think of another password before a guard notices you\n'+
         "You have found another one, but will it be correct?",
    options: [
          {
            text:'256a89ZQF',
            nextText:9
        },
        {
            text:'80TqGL72a',
            nextText:9
        },
        {
            text:'Aw345a6t5',
            nextText:10
        },
        {
            text:'6YU998aQw',
            nextText:9
        },
    ]
 },
 {
    id: 10,
    text: 'You enter the password\n'+
          'Congrats, you have chosen the correct password\n'+
          'Lucky for you there is another prisioner is making a scene\n'+
           'You plunge yourself and start sprinting making your way onto freedom.....',
    
 },
 //-------------------------
 {
    id: 6,
    text:'You call the guards over and tell them how much your head has been hurting\n'+
          'The guard looks at you with anger and walks away',
    options: [
        {
            text:'Bang your head',
            nextText:11
        },
        {
            text:'Insult the guard',
            nextText:12
        },
        
    ]
 },
 {
    id: 11,
    text:'Frustrated with the guard you bang your head against the cell door knocking yourself out in the process\n'+
         'The guard comes rushing back to call you an idiot\n'+
         'You are now injured and will not be able to continue with your plan...',
         options: [
            {
                text: "Restart",
                nextText: -2
            },
        ]
 },
 {
    id: 12,
    text:"Frustrated with the guard you start to instult their mother and call her a pig\n"+
         'This infuriates the guard and now they want you dead\n' +
         'What will you do? ',
    options: [
        {
            text:'Fight the guard', 
            nextText: 13
        },
        {
            text:'Apologise', 
            nextText: 14
        },
    ]
 },
 {
    id: 13,
    text:"As the guard goes to unlock the cell to beat you up, you pull him against the cell door and knock them clean out\n"+
         'A set of keys drop which you use to unlock the door and make a break for it\n'+
         'Nothing better than the taste of freedom...',
 },
 {
    id: 14,
    text:"Before the guard opens your cell you say you are very sorry to the guard but they don't care and beats you silly\n"+
          "You get horribly injured and your masterplan has failed..."  ,
          options: [
            {
                text: "Restart",
                nextText: -2
            },
        ]
 },
 //-----------------------------------
 {
    id: 7,
    text:'You stick your finger down your throat to make yourself vomit all over the cell floor\n'+
         'The guard smells the stentch you have created and gets you a mop and bucket\n'+
         'They insist you clean it up',
    options: [
        {
            text:'Refuse to clean', 
            nextText: 15
        },
        {
            text:'Accept the mop and bucket', 
            nextText: 16
        },
    ]
 },
 {
    id: 15,
    text:'You refuse to clean your own mess'+
         'The guards throw the mop and bucket at you and walk away ',
    options: [
        {
            text:'Break the mop and try pry the door open', 
            nextText: 17
        },
        {
            text:'Clean the mess', 
            nextText: 18
        },
    ]
 },
 {
    id: 16,
    text:'You have accepted the mop and bucket that the guard gives you \n'+
          'It seems to be a wooden mop'+
         'What will you do?',
    options: [
        {
            text:'Break the mop and try pry the door open', 
            nextText: 17
        },
        {
            text:'Clean the mess', 
            nextText: 18
        },
    ]
 },
 {
    id: 17,
    text:'While breaking the mop you slip and hit you head \n'+
         "Knocking your self out embarassingly....",
         options: [
            {
                text: "Restart",
                nextText: -2
            },
        ]
 },
 {
    id: 18,
    text:'You use the mop and bucket to clean all of your gross vomit off of the ground insuring that you will not slip \n'+
         "What now?",
    options: [
        {
            text:'Break mop and pry the door open', 
            nextText: 19
        },
        {
            text:'Tell guard that you have finished', 
            nextText: 20
        }
    ]
 },
 {
    id: 19,
    text:'You break the mop in half and pry the door wide open\n'+
         "Lucky for you the smell you created has made the guard leave so you can make your escape",
    options: [
        {
            text:'Attempt an escape', 
            nextText:75  
        },
        {
            text:'Tell guard that you have finished', 
            nextText: 20
        }
    ]
 },
 {
    id: 75,
    text:'You take your chance, but will it pay off.......\n'+
         "Phew! Gladly the risky move paid off \n"+
         'As you look back at the concrete prison\n'+
         "You sigh in relief, as you know that you can live without fear of the gang leader",
 },
 {
    id: 20,
    text:'You tell the guard that you have finshed and the guard takes away your mop and bucket \n'+
         "Now you don't know how you will escape\n"+
         'Why would you tell them?',
         options: [
            {
                text: "Restart",
                nextText: -2
            },
        ]
    },
     // Route A
    {
        id: 2,
        text: 'The guards come and unlock the cell for lunch\n' +
            'What will you do now?',
        options: [
            {
                text: 'Go to the canteen',
                nextText: 21
            },
            {
                text: "Make a break for it",
                nextText: 22
            },
            {
                text: "Stay in your cell",
                nextText: 23
            }
        ]
    },



    // AA Path

    {
        id: 21,
        text: 'You go to the canteen and collect your food.\n' +
            'What will you do now?',
        options: [
            {
                text: "Eat it and keep your head down",
                nextText: 24
            },
            {
                text: "Throw it at someone",
                nextText: 25
            },
            {
                text: "Attack a guard with the tray",
                nextText: 26
            }
        ]
    },

    

// 3 Character Codes
    {
        id: 25,
        text: 'You throw the food and it hits a gang leader in the head.\n' +
              'He gets angry and decides to beat you up with the other gang members.\n' +
              'The guards break the fight and you are placed into solitary confinement',
              options: [
                {
                    text: "Restart",
                    nextText: -2
                },
            ]
    },


    {
        id: 24,
        text: 'You keep your head down, eating your food as other prisoners start to attack guards.\n' +
            'What do you do now?.',
        options: [
            {
                text: "Sit at the table, doing nothing",
                nextText: 27
            },
            {
                text: "Attack the prisoner beating the guard",
                nextText: 28
            },
            {
                text: "Join in with the prisoner beating the guard",
                nextText: 29
            },
        ]
    },

    {
        id: 26,
        text: 'You swing the tray at a guard, knocking them out.\n' +
            'What are you going to do next?',
        options: [
            {
                text: "Steal their gun",
                nextText: 30
            },
            {
                text: "Run away",
                nextText: 31
            },
        ]
    },

// 4 Character Codes
    {
        id: 27,
        text: 'Just for not doing anything you can go back to the start.\n',
        options: [
            {
                text: "Restart",
                nextText: -2
            }
        ]        
    },

    {
        id: 28,
        text: 'The guard testifies for you in your appeal as a character witness, making the jury believe your innocence.\n' + 
                'You think to yourself after the guard has helped you\n'+
                "Maybe you could get into the gang leader's good graces?\n"+
                "Only time will tell, but we don't have time right now",
                options: [
                    {
                        text: "Restart",
                        nextText: -2
                    },
                ]
    },

    {
        id: 29,
        text: 'More guards come to the aid of their colleague and place you in solitary confinement.\n'+
            "Really did't think this one through, did you?",
            options: [
                {
                    text: "Restart",
                    nextText: -2
                },
            ]
    },

    {
        id: 30,
        text: 'You savagely attack the guard, beating them down.\n' + 
        'What will you do now',
        options: [
            {
                text: "Take their weapon",
                nextText: 31
            },
            {
                text: "Run away",
                nextText: 32
            },
        ]
    },

    {
        id: 32,
        text: 'You run away without a weapon, being captured almost immediately.\n' + 
        'Thinking how dumb you could be to leave without taking something to protect you...',
        options: [
            {
                text: "Restart",
                nextText: -2
            },
        ]
    },

// 5+ Characters
   {
        id: 31,
        text: 'You run to the exit with a weapon, threatening guards on the way before walking out of the prison.\n' + 
        'Congratulations!',
        options: [
            {
                text: "Continue",
                nextText: 33
            },
        ]
    },

    {
        id: 33,
        text: 'You think how well that went, despite not taking a hostage, and you wonder where the armed guards were.\n' + 
        '',
        options: [
            {
                text: "Continue",
                nextText: 34
            },
        ]
    },
    {
        id: 34,
        text: "I'd say you heard a shot fired in the distance before you saw nothing, but that's not how it works. So.\n" + 
        'Everything just goes black all of a sudden',
        options: [
            {
                text: "Restart",
                nextText: -2
            },
        ]
    },

// AB Path
{
    id: 22,
    text: 'You attempt to run but are immediately grabbed by the guards.\n' +
        'What made you think that would work?',
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},

// AC Path
{
    id: 23,
    text: "A guard notices you haven't left your cell and tells you to go eat in the canteen.\n" +
        'What do you want to do now?',
    options: [
        {
            text: "Go to the canteen",
            nextText: 21
        },
        {
            text: "Stay in your cell",
            nextText: 35
        },
        {
            text: "Attack the guard",
            nextText: 36
        },
    ]
},
// 3 Characters
{
    id: 35,
    text: "The guards walk away, closing the cell door but not locking it.\n" +
        'What do you want to do now?',
    options: [
        {
            text: "Sneak out to the guard house",
            nextText: 37
        },
        {
            text: "Sneak out to the toilets",
            nextText: 38
        },
        {
            text: "Sneak out to the armoury",
            nextText: 39
        },
        {
            text: "Sneak out to visitation",
            nextText: 40
        },
        {
            text: "Do nothing",
            nextText: 41
        },
    ]
},
{
    id: 36,
    text: "You attack the guard, not realising there is another guard behind them.\n" +
        "You really didn't think that one through did you?",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},
// 4 Characters

{
    id: 37,
    text: "You leave your cell, sneaking into the guard house, finding it full of guards, who promptly put you in solitary.\n" +
        "You really didn't think that one through did you?",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},

{
    id: 38,
    text: "You leave your cell, sneaking to the toilets before entering and finding a group of prisoners about to attempt an escape.\n" +
        "What are you going to do?",
    options: [
        {
            text: "Join them",
            nextText: 42
        },
        {
            text: "Report them",
            nextText: 43
        },
    ]
},

{
    id: 39,
    text: "You leave your cell, sneaking into the armoury, finding it full of armed guards, who promptly make you regret that decision.\n" +
        "Well played dumbo!",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},
{
    id: 40,
    text: "You leave your cell, sneaking into the visitation area, finding it full of guards and that there would be no way to escape through it.\n" +
        "Some recce might have helped!",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},
{
    id: 41,
    text: "Doing nothing, are you sure?.\n" +
        "Really? It took us quite a while to make this and doing nothing is just plain rude.",
    options: [
        {
            text: "Yes",
            nextText: 44
        },
        {
            text: "No",
            nextText: 35
        },
    ]
},

// ACBB Path
{
    id: 42,
    text: "You join the prisoners in their escape attempt, before they betray you and throw you back into the prison as they climbed over the wall.\n" +
        "Look on the bright side, you get to enjoy more awful prison food",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},
{
    id: 43,
    text: "The guards are distracted by your report and you manage to sneak into the guardhouse.\n" +
        "What are you going to do now?",
    options: [
        {
            text: "Lockdown the prison",
            nextText: 45
        },
        {
            text: "Put on a guards uniform",
            nextText: 46
        },
    ]
},
{
    id: 45,
    text: "Great idea, you'll lock all the guards in.\n"+
    "Except you've just locked yourself into the guardhouse and they all know you're in there.\n",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},
{
    id: 46,
    text: "You put on the uniform before walking straight out of the prison, nobody noticing you dressed in the uniforms.\n" +
        "Congratulations!",
},
// ACBE Path
{
    id: 44,
    text: "Are you really sure you want to do nothing?\n" +
        "",
    options: [
        {
            text: "Yes",
            nextText: 47
        },
        {
            text: "No",
            nextText: 35
        },
    ]
},
{
    id: 47,
    text: "Fine, you want to do nothing. I'm very offended.\n" +
        "...",
    options: [
        {
            text: "Restart",
            nextText: -2
        },
    ]
},
{
  id: 3,
  text: "During the lunch break, you manage to steal a fork from the cafeteria and afterwards quickly head to your cell hiding the utensil underneath the old worn out mattress.\n" +
        "At night after the lights go off, you start crafting a small picklock tool using only the moonlight coming through the reinforced window hole. Successfully completing the construction of your escape tool you patiently wait until the nightfall of the following day......\n" +
        "You have unlocked your cell door. What do you do?",
  options: [
      {
          text: "attempt to picklock uniform room",
          nextText: 48
      },
      {
        text: "sneak slowly towards the CCTV room",
        nextText: 49
      },
      {
        text: "subdue the walking security guard",
        nextText: 50
      },
  ]
},
// first path
{
  id: 48,
  text: "You successfully unlock the uniform room \n" +
        "You proceed to enter the room. What do you do?",
  options: [
      {
          text: "change into a guard uniform and exit room",
          nextText: 51
      },
      {
        text: "try finding an open locker",
        nextText: 52
      },
  ]
},
{
  id: 49,
  text: "You find a security guard playing games on his smartphone, sitting across the control panel for all the CCTVs and alarms.\n" +
        "Spotting a small coin beside the door frame of the entrance. What do you do?",
  options: [
      {
          text: "throw the coin to distract the guard",
          nextText: 53
      },
      {
        text: "quietly enter and subdue the sitting security guard",
        nextText: 54
      },
  ]
},
{
  id: 50,
  text: "You attempt to sneakily attack the guard but he manages to hear your footsteps\n" +
        "He then turns around and hits your chest with his baton.\n" +
        "Sucking in the impact, you get him in a headlock and he slowly gets knocked out\n" +  
        "What do you do?",
  options: [
      {
          text: "make a run to the main door",
          nextText: 55
      },
      {
        text: "stealthily move towards the main door",
        nextText: 56
      },
  ]
},
// second path
{
  id: 51,
  text: "You wear the guards uniform and head your way down to the main door \n" +
        "Arriving at the main door you notice that you don't have a guard keycard\n"+
        "Speedly you head back towards the uniform room. Suddenly a person taps your shoulder from the back\n"+
        "By the tone of his voice you realize it is another security guard. What do you do?",
  options: [
      {
          text: "attempt to grab his arm and twist it, dislocating his shoulder in the process",
          nextText: 57
      },
      {
        text: "turn around slowly and try to sweet talk your way out",
        nextText: 58
      },
      {
        text: "sprint as fast as you can into the uniform room",
        nextText: 59
      },
  ]
},
{
  id: 52,
  text: "You search the open locker and find a keycard inside\n" +
        "After you wear one of the uniforms. You head in the direction of the main door\n" +
        "You reach the door and try to unlock it with the keycard.\n"+ 
        "Unfortuntely you also need to answer the security questions for authentication:\n" +
        "9999 = 4, 8888 = 8, 1816 = 6, 1212 = 0, 1919 = ?",
  options: [
      {
          text: "6", 
          nextText: 67
      },
      {
        text: "8", 
        nextText: 67
    },
    {
      text: "4", 
      nextText: 68
  },
  {
    text: "0", 
    nextText: 67
},
  ]
},
{
  id: 67,
  text: "You have gotten the question incorrect and the guards have alarmed\n" +
        "Better luck next time....",
  options: [
      {
          text: "Restart", 
          nextText: -2
      },
  ]
},
{
  id: 68,
  text: "Congrats you got the first one correct. Second question:\n" +
        "You better be quick or the time will run out and you'll be caught!!!\n"+
        "5+3+2 = 151022, 9+2+4 = 183652, 8+6+3 = 482466, 5+4+5 = 202541, 7+2+5 = ?",
  options: [
      {
          text: "473514", 
          nextText: 69
      },
      {
        text: "143547", 
        nextText: 70
    },
    {
      text: "471435", 
      nextText: 69
  },
  {
    text: "142835", 
    nextText: 69
},
  ]
},
{
  id: 69,
  text: "You have gotten the question incorrect and the guards have alarmed\n" +
  "Better luck next time....",
options: [
{
    text: "Restart", 
    nextText: -2
},
]
},
{
id: 70,
  text: "Luckily your big brain gets you out in no time\n" +
        "You unlock it the door. Successfully making your way past the guard room\n" +
        "Finally freedom has come as you leave the prison grounds...",
},
{
  id: 53,
  text: "The guard hears the coin and leaves the room to see where the sound came from\n" +
        "After the guard has left, what do you do?",
  options: [
      {
          text: "enter the CCTV room quickly and disable the alarms",
          nextText: 60
      },
      {
        text: "jump onto the guard and put him into a headlock",
        nextText: 54
      },
  ]
},
{
  id: 54,
  text: "The guard is now put to sleep and you disable all the alarms\n" +
        "What do you do now?",
  options: [
      {
          text: "Take the guards keycard",
          nextText: 62
      },
      {
        text: "Go to the canteen",
        nextText: 63
      },
  ]
},
{
  id: 55,
  text: "You make a run to the main door, but the guards are alarmed from the noise\n" +
        "You are caught and thrown into solitary confinement.",
  options: [
      {
          text: "Restart",
          nextText: -2
      },
  ]
},
{
  id: 56,
  text: "You slowly creep towards the main door, but then you suddenly hear the alarms ringing loudly\n" +
        "The CCTV guard caught you sneaking on his screen and you are sent into solitary confinement.",
  options: [
      {
          text: "Restart",
          nextText: -2
      },
  ]
},
// third path
{
  id: 57,
  text: "You attempt this risky move, but will it pay off?\n" +
        "Of course you mess it up and easily miss the guard's arm while trying to grab it\n"+
        "As you turned your body, he sees your face and realizes you are not a security guard\n" +
        "He then roughly pins you down onto the ground and holds your arms.",
  options: [
      {
          text: "Try to fight back while on the ground",
          nextText: 64
      },
      {
        text: "Give up",
        nextText: 65
      },
  ]
},
{
  id: 58,
  text: "As you turn, the guard notices you are not a security guard\n" +
        "He then pounces onto you and holds your arms.",
  options: [
    {
      text: "Try to fight back while on the ground",
      nextText: 64
    },
    {
      text: "Give up",
      nextText: 65
    },
  ]
},
{
  id: 59,
  text: "You quickly enter into the uniform room and slam the door shut as fast as you can\n" +
        "You find a baton beside you. What do you do now?",
  options: [
      {
          text: "Hide behind the door and hit the guard",
          nextText: 66
      },
      {
        text: "Fake a surrender",
        nextText: 67
      },
  ]
},
{
  id: 60,
  text: "You manage to disable the alarms rapidly\n" +
        "As you leave the room, you are greeted by the guard\n"+
        "Should've been quicker.......",
  options: [
      {
          text: "Restart",
          nextText: -2
      },
  ]
},
{
   id: 52,
    text: "You reach the door and try to unlock it with the keycard.\n"+ 
          "Unfortuntely you also need to answer the security questions for authentication:\n" +
          "9999 = 4, 8888 = 8, 1816 = 6, 1212 = 0, 1919 = ?",
    options: [
        {
            text: "6", 
            nextText: 71
        },
        {
          text: "8", 
          nextText: 71
      },
      {
        text: "4", 
        nextText: 72
    },
    {
      text: "0", 
      nextText: 71
  },
    ]
  },
  {
    id: 71,
    text: "You have gotten the question incorrect and the guards have alarmed\n" +
          "Better luck next time....",
    options: [
        {
            text: "Restart", 
            nextText: -2
        },
    ]
  },
  {
    id: 72,
    text: "Congrats you got the first one correct. Second question:\n" +
          "You better be quick or the time will run out and you'll be caught!!!\n"+
          "5+3+2 = 151022, 9+2+4 = 183652, 8+6+3 = 482466, 5+4+5 = 202541, 7+2+5 = ?",
    options: [
        {
            text: "473514", 
            nextText: 73
        },
        {
          text: "143547", 
          nextText: 74
      },
      {
        text: "471435", 
        nextText: 73
    },
    {
      text: "142835", 
      nextText: 73
     },
    ]
  },
  {
    id: 73,
    text: "You have gotten the question incorrect and the guards have alarmed\n" +
          "Better luck next time....",
      options: [
      {
      text: "Restart", 
      nextText: -2
      },
    ]
  },
  {
  id: 74,
    text: "Luckily your big brain gets you out in no time\n" +
          "You unlock it the door. Successfully making your way past the guard room\n" +
          "Finally freedom has come as you leave the prison grounds.",
  },
{
id: 63,
  text: "You picklock the canteen door carefully\n"+
        "and head in the direction of the yard door through the canteen.\n" +
        "You open the door and burst running across the whole outdoor yard\n"+
        "Plunging yourself onto the fence, the barbed wire rips through your skin\n"+
        "You make it over and finally the taste of freedom",
},
// fourth path 
{
  id: 64,
  text: "Miraculously you wiggle your arms free and turn laid on your back\n" +
        "You then strike his face with the boot of your shoe badly injuring him",
  options: [
    {
      text: "Make a run for it!",
      nextText: 59
    },
  ]
},
{
  id: 65,
  text: "You are caught and thrown into solitary confinement...",
  options: [
      {
          text: "Restart",
          nextText: -2
      },
  ]
},
{
  id: 66,
  text: "You throw the baton at him as he enters\n"+
        "Finally making contact with his skull\n"+
        "The guard is knocked out cold",
  options: [
    {
      text: "Take his keycard",
      nextText: 62
    },
  ]
},
{
  id: 67,
  text: "He does not fall for your clever trick\n" +
        "and strikes your head with the bottom of his pistol\n"+
        "You get knocked out cold......",
  options: [
    {
      text: "Restart",
      nextText: -2
    },
  ]
},
]

startGame()