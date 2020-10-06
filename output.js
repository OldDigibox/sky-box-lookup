const jsonURL = 'https://olddigibox.github.io/sky-box-lookup/database.json'

function getversion() {

    //container for info
    let infocontainer = document.getElementById('infocontainer')

    //get value from um input
    let textinput = document.getElementById('textinput').value

    //make var name which is a div element
    let name = document.createElement('div')
    let link = document.createElement('a')
    let confirmation = document.createElement('div')


    fetch(jsonURL, { method: "Get" })
        .then(res => res.json())
        .then((json) => {

            removeDivs()
                //get name of Version Number and set as text
            name.innerText = `Name: ${json["a" + textinput].name}`
                //get link of Version Number and set as herf
            link.href = `${json["a" + textinput].link}`
                //set target as _blank
            link.target = "_blank";
            //get link of Version Number and set text
            link.innerText = `Link: ${json["a" + textinput].link}`
                //get confirmation of Version Number and set as text
            confirmation.innerText = `Confirmation: ${json["a" + textinput].name}`

            addClass()
            append()

            //functions 
            function removeDivs() {
                //elements with class name infotext
                var infotext = document.querySelector('.infotext');
                //if element in infocontainer with class infotext remove
                if (infocontainer.contains(infotext)) {
                    infocontainer.querySelectorAll('*').forEach(n => n.remove())
                }
            }

            function addClass() {
                //add the class infotext to all divs
                name.className += "infotext";
                link.className += "infotext helpbutton";
                confirmation.className += "infotext";
            }

            function append() {
                //add them to infocontainer div
                infocontainer.append(name)
                infocontainer.append(link)
                infocontainer.append(confirmation)
            }

        })
        .catch(err => {
            console.error(err)
        })
}
