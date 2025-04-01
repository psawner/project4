document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector("#menu-icon i"); // Select only the <i> inside #menu-icon
    const slider = document.getElementById("slider");

    menuIcon.addEventListener("click", function(event) {
        slider.classList.toggle("show"); // Toggle slider visibility
        event.stopPropagation(); // Prevent event from bubbling up to document
    });

    // Hide slider when clicking outside
    document.addEventListener("click", function(event) {
        if (!slider.contains(event.target) && event.target !== menuIcon) {
            slider.classList.remove("show"); // Hide slider
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const residentialDashboard = document.querySelector("#slider ul li:nth-child(2)");

    residentialDashboard.addEventListener("click", function () {
        // Remove existing notification
        const existingNotification = document.getElementById("custom-notification");
        if (existingNotification) existingNotification.remove();

        // Create notification element
        const notification = document.createElement("div");
        notification.id = "custom-notification";
        notification.innerHTML = `
            <span class="notif-icon">✨</span>
            <span class="notif-text">Redirecting...</span>
            <button class="notif-close">&times;</button>
        `;

        // Style the notification
        Object.assign(notification.style, {
            position: "fixed",
            top: "-100px", // Start off-screen
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.85)",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0px 0px 15px rgba(0, 195, 255, 0.8)", // Glowing effect
            zIndex: "1000",
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            transition: "top 0.5s ease-in-out",
            maxWidth: "80%", // Prevents overflow
            textAlign: "center",
        });

        // Add glowing effect animation
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes glowEffect {
                0% { box-shadow: 0px 0px 10px rgba(0, 195, 255, 0.8); }
                100% { box-shadow: 0px 0px 25px rgba(0, 195, 255, 1); }
            }
            @media (max-width: 480px) {
                #custom-notification {
                    font-size: 12px; /* Smaller font for small screens */
                    padding: 10px; /* Adjust padding */
                    max-width: 90%; /* Allow better fitting */
                }
            }
        `;
        document.head.appendChild(style);

        // Close button styling
        const closeButton = notification.querySelector(".notif-close");
        Object.assign(closeButton.style, {
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer"
        });

        // Append notification to body
        document.body.appendChild(notification);

        // Slide in the notification
        setTimeout(() => notification.style.top = "10px", 100);

        // Close button functionality
        closeButton.addEventListener("click", function () {
            notification.style.top = "-100px";
            setTimeout(() => notification.remove(), 500);
        });

        // Auto-remove after 3.5 seconds
        setTimeout(() => {
            notification.style.top = "-100px";
            setTimeout(() => notification.remove(), 500);
        }, 3500);

        // Redirect after 3 seconds
        setTimeout(() => window.location.href = "amns.html", 3000);
    });
});

/*new update1*/
/*const profilePic = document.querySelector("#profile-pic");
const profileInfo = document.querySelector("#profile-info");

profilePic.addEventListener("click", (event) => {
    if (profileInfo.classList.contains("visible")) {
        profileInfo.classList.remove("visible");
    } else {
        profileInfo.classList.add("visible");
    }
    event.stopPropagation();
});

document.addEventListener("click", (event) => {
    if (!profileInfo.contains(event.target) && event.target !== profilePic) {
        profileInfo.classList.remove("visible");
    }
});*/




/*new update2 */
/*const menu=document.querySelector("#menu");
const menusection=document.querySelector("#menu-section");


menu.addEventListener("click",(event)=>{
    if(menusection.classList.contains("visible")){
        menusection.classList.remove("visible");
    }
    else{
        menusection.classList.add("visible");
        hidden.style.display = "none";  
        menuinfo.style.display = "";    
    }
    event.stopPropagation();
});

document.addEventListener("click", (event) => {
    if (!menusection.contains(event.target) && event.target !== menu) {
        menusection.classList.remove("visible");
    }
});*/


/*const profilePic = document.querySelector("#profile-pic");
const profileInfo = document.querySelector("#profile-info");
const menuSection = document.querySelector("#menu-section");

profilePic.addEventListener("click", (event) => {
    
    menuSection.classList.remove("visible");

    profileInfo.classList.toggle("visible");
    event.stopPropagation();
});*/



const profilePic = document.querySelector("#profile-pic");
const profileInfo = document.querySelector("#profile-info");
const myProfile = document.querySelector("#my-profile");
const menuSection = document.querySelector("#menu-section");
// Function to handle menu visibility
function toggleProfileInfo(event) {
    menuSection.classList.remove("visible");
    hideOutput();
    profileInfo.classList.toggle("visible");
    event.stopPropagation();
    
}

// Function to check screen size and set event listener
function updateEventListeners() {
    if (window.matchMedia("(min-width: 300px) and (max-width: 400px)").matches) {
        if (myProfile) {
            myProfile.addEventListener("click", toggleProfileInfo);
        }
        if (profilePic) {
            profilePic.removeEventListener("click", toggleProfileInfo);
        }
    } else {
        if (profilePic) {
            profilePic.addEventListener("click", toggleProfileInfo);
        }
        if (myProfile) {
            myProfile.removeEventListener("click", toggleProfileInfo);
        }
    }
}

// Run on page load and resize
window.addEventListener("load", updateEventListeners);
window.addEventListener("resize", updateEventListeners);

// Stop clicks from closing menu when clicking inside profile info
document.addEventListener("click", (event) => {
    if (!profileInfo.contains(event.target) && !profilePic.contains(event.target) && !myProfile.contains(event.target)) {
        profileInfo.classList.remove("visible");
        
    }
});

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    
    profileInfo.classList.remove("visible");
    hideOutput();
    menuSection.classList.toggle("visible");
    hidden.style.display = "none";  
    menuinfo.style.display = ""; 
    event.stopPropagation();
});


document.addEventListener("click", (event) => {
    if (!profileInfo.contains(event.target) && event.target !== profilePic) {
        profileInfo.classList.remove("visible");
    }
    if (!menuSection.contains(event.target) && event.target !== menu) {
        menuSection.classList.remove("visible");
    }
    if (!outputBox.contains(event.target) && event.target !== document.getElementById("location")) {
        hideOutput();
    }
});





const menuinfo = document.querySelector("#menuinfo");
const roomvacancy = document.querySelector("#room-vacancy");
const hidden = document.querySelector("#hidden"); 
const hidden1 = document.querySelector("#hidden1"); 
const hidden2 = document.querySelector("#hidden2"); 


hidden.style.display = "none";  
menuinfo.style.display = "";    


roomvacancy.addEventListener("click", () => {
    if (hidden.style.display === "none") {
        hidden.style.display = "";   
        menuinfo.style.display = "none"; 
    } else {
        hidden.style.display = "none"; 
        menuinfo.style.display = "";   
    }
});


hidden1.addEventListener("click", () => {
    hidden.style.display = "none"; 
    menuinfo.style.display = "";   
});








/*getting ip address of user */
document.getElementById("output").style.visibility = "hidden";

document.getElementById("location").addEventListener("click", function (event) {
    let outputBox = document.getElementById("output");
    
     // Hide other sections when location is clicked
     document.getElementById("menu-section").classList.remove("visible");
     document.getElementById("profile-info").classList.remove("visible");

    if (outputBox.style.visibility === "hidden") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                let data = await response.json();

                let address = data.display_name || "Address not found!";
                outputBox.innerHTML = `
                    <strong>Latitude:</strong> ${lat} <br>
                    <strong>Longitude:</strong> ${lon} <br>
                    <strong>Location:</strong> ${address}
                `;
                showOutput();
            }, () => {
                outputBox.innerText = "Error getting location!";
                showOutput();
            });
        } else {
            outputBox.innerText = "Geolocation is not supported!";
            showOutput();
        }
    } else {
        hideOutput();
    }
    event.stopPropagation(); 
});


document.addEventListener("click", function (event) {
    if (!document.getElementById("location").contains(event.target)) {
        hideOutput();
    }
});

function showOutput() {
    let outputBox = document.getElementById("output");
    outputBox.style.visibility = "visible";
    outputBox.style.opacity = "1";
    outputBox.style.transform = "scale(1.05)";
}

function hideOutput() {
    let outputBox = document.getElementById("output");
    outputBox.style.opacity = "0";
    outputBox.style.transform = "scale(0.9)";
    setTimeout(() => {
        outputBox.style.visibility = "hidden";
    }, 300); 
}


/*update 3*/
const navbar=document.querySelector("#navbar");
const secondhead=document.querySelector("#second-head");
const menubar=document.querySelector("#menu-bar");
const contentbox1=document.querySelector("#content-box1");
const contentbox2=document.querySelector("#content-box2");
const contactdetails=document.querySelector("#contact-details");
const footer=document.querySelector("footer");
const address=document.querySelector("#address")
const body=document.querySelector("body");


//const userlocation=document.querySelector("#user-location");


const black=document.querySelector("#black");
const white=document.querySelector("#white");
const light=document.querySelector("#light");





// Function to reset to default (CSS-defined) colors
function resetToDefault() {
    websearch.style.background="";
    websearch.style.color="";

    output.style.background="";
    output.style.color="";

    menuSection.style.background="";
    menuSection.style.border="";
    menuSection.style.color="";
 
    profileInfo.style.background="";
    profileInfo.style.border="";
    profileInfo.style.color="";
    head2.style.color="";
    theme.style.color="";
    photoh4.style.color="";
    btn.style.color="";

    slider.style.background="";
    sliderelements.forEach(elements => {
        elements.style.color = ""; 
        elements.addEventListener("mouseover", () => {
            elements.style.color = "";
            
            
        });

        elements.addEventListener("mouseout", () => {

            elements.style.color = "";
        });
        
    });

    body.style.background="black";
    navbar.style.backgroundColor = "";
    navbar.style.color = ""; 
    icons.style.color="";
    secondhead.style.backgroundColor = "";
    secondhead.style.color = "";

    function changeTextColors(linkColor, paragraphColor) {
        links.forEach(link => {
            link.style.color = linkColor;
        });
    
        paragraphs.forEach(para => {
            para.style.color = paragraphColor;
        });
    }

    changeTextColors("", "");
    icons1.style.boxShadow=""
    icons2.style.color="";
    menubar.style.border="";
    menubar.style.backgroundColor = "";
    contentbox1.style.backgroundColor = "";
    contentbox1.style.border="";
    bio.style.color="";
    userinfo.style.background="";

    thElements.forEach(th => {
        th.style.backgroundColor = ""; 
        th.style.color = "";
        th.style.borderLeft = ""; 
        th.style.borderTop = "";
        th.style.borderBottom = "";  
    });
    
    
    tdElements.forEach(td => {
        td.style.backgroundColor = ""; 
        td.style.color = ""; 
        td.style.borderRight = ""; 
        td.style.borderTop = "";
        td.style.borderBottom = "";
    });


    contentbox2.style.backgroundColor = "";
    contentbox2.style.border="";
    house.style.color="";
    
    timeline.forEach(item => {
        item.style.border = ""; 
        
    });
    title.forEach(items => {
        items.style.color = ""; 
        
    });
    descriptions.forEach(desc => {
        desc.style.color = ""; // Change to desired color
    });


    contactdetails.style.backgroundColor = "";
    contactdetails.style.border = "";
    contact.style.color="";

    thelements.forEach(th => {
        th.style.backgroundColor = ""; 
        th.style.color = "";
        th.style.borderRight = ""; 
        th.style.borderLeft = ""; 
        th.style.borderTop = "";
        th.style.borderBottom = "";  
    });
    
    
    tdelements.forEach(td => {
        td.style.backgroundColor = ""; 
        td.style.color = ""; 
        td.style.borderLeft = ""; 
        td.style.borderRight = ""; 
        td.style.borderTop = "";
        td.style.borderBottom = "";
    });

    footer.style.backgroundColor = "";
    
    footer.style.borderTop="";
    footer.style.color="";

    anchors.forEach(anchor => {
        anchor.style.color = ""; // Change to desired color
        
        anchor.addEventListener("mouseover", () => {
            anchor.style.color = "";
            anchor.style.background = "";
            anchor.style.borderRadius = "";
            anchor.style.transition = "";
            anchor.style.position = "";
            
        });

        anchor.addEventListener("mouseout", () => {
            anchor.style.background = ""; // Resets to default when not hovering
            anchor.style.color = "";
            
        });

        anchor.addEventListener("mousedown", () => {
            anchor.style.transform = "";
            anchor.style.boxShadow = ""; 
        });
    
        anchor.addEventListener("mouseup", () => {
            anchor.style.boxShadow = "";
        });
    });
   
    address.style.backgroundColor="";
    locationSpan.style.color="";
    locationSpan.style.background="";  
    serverSpan.style.color="";
    serverSpan.style.background="";  
    
    
    
}

// Event listener for Black (default styles)
black.addEventListener("click", resetToDefault);

//navbar divs
const icons=document.querySelector("#menu i");

//second-head divs
const dashboard = document.querySelector("#dashboard");
const links = dashboard.querySelectorAll("a");
const paragraphs = dashboard.querySelectorAll("p");

//menu-bar divs
const icons1=document.querySelector("#menu-icon i");
const icons2=document.querySelector("#menu-icon");

//content-boxes dives
const bio=document.querySelector("#bio p");
const userinfo=document.querySelector("#table1");
const thElements = document.querySelectorAll("#table1 th");
const tdElements = document.querySelectorAll("#table1 td");

const house=document.querySelector("#house p");
const timeline=document.querySelectorAll(".timeline-item");
const title=document.querySelectorAll(".title");
const descriptions = document.querySelectorAll(".timeline-item .description");

//contact-details div 
const contact=document.querySelector("#contact-icon p");
const newtable=document.querySelector("#new-table");
const thelements=document.querySelectorAll("#new-table th");
const tdelements=document.querySelectorAll("#new-table td");


//footer div 
const anchors = document.querySelectorAll("#about-company a,#about-website a");
const locationSpan = document.querySelector("#location .tooltip");
const serverSpan = document.querySelector("#server .tooltip1");

//profile-info divs 
const head2=document.querySelector("#head2");
const theme=document.querySelector("#theme");
const photoh4=document.querySelector("#photo h4");
const btn=document.querySelector("button");

//slider divs 
const slider=document.querySelector("#slider");
const sliderelements=document.querySelectorAll("#slider ul li");

 //websearch div 
 const websearch=document.querySelector("#web-search input");

 //ip address 
 const output=document.querySelector("#output");
 

// Event listener for White (specific color changes)
white.addEventListener("click", () => {

    websearch.style.background="rgb(201, 209, 209)";
    websearch.style.color="#2b2727";

    output.style.background="linear-gradient(135deg, #8ba7c4, #bbcacc)";
    output.style.color="#2b2727";
  
   

    menuSection.style.background="rgb(201, 209, 209)";
    menuSection.style.border="1px solid rgb(161, 160, 160)";
    menuSection.style.color="#2b2727";

    profileInfo.style.background="rgb(201, 209, 209)";
    profileInfo.style.border="1px solid rgb(161, 160, 160)";
    head2.style.color="#2b2727";
    theme.style.color="#2b2727";
    photoh4.style.color="#2b2727";
    btn.style.color="#2b2727";

    slider.style.background="rgb(201, 209, 209)";
    sliderelements.forEach(elements => {
        elements.style.color = "#2b2727"; 
        elements.addEventListener("mouseover", () => {
            elements.style.color = "white";
            
            
        });

        elements.addEventListener("mouseout", () => {

            elements.style.color = "#2b2727";
            
        });
        
    });

    body.style.background="rgb(201, 209, 209)";
    navbar.style.backgroundColor = "rgb(180, 197, 197)"; // White
    navbar.style.color = "#2b2727"; 
    icons.style.color="#2b2727";
    secondhead.style.backgroundColor = "rgb(201, 209, 209)"; 
    secondhead.style.color = "#2b2727";
    
    function changeTextColors(linkColor, paragraphColor) {
        links.forEach(link => {
            link.style.color = linkColor;
        });
    
        paragraphs.forEach(para => {
            para.style.color = paragraphColor;
        });
    }

    changeTextColors("#2b2727", "#2b2727");
    icons1.style.boxShadow="0 0 5px black"
    icons2.style.color="#2b2727";
    menubar.style.backgroundColor = "rgb(201, 215, 209)";
    menubar.style.borderTop="1px solid rgb(161, 160, 160)";
    menubar.style.borderBottom="1px solid rgb(161, 160, 160)";

    contentbox1.style.backgroundColor = "";
    contentbox1.style.border="1px solid rgb(161, 160, 160)";
    bio.style.color="black";
    userinfo.style.background="rgb(201, 209, 209)";
    
    thElements.forEach(th => {
        th.style.backgroundColor = ""; 
        th.style.color = "black";
        th.style.borderLeft = "2px solid black"; 
        th.style.borderTop = "2px solid black";
        th.style.borderBottom = "2px solid black";  
    });
    
    
    tdElements.forEach(td => {
        td.style.backgroundColor = ""; 
        td.style.color = "black"; 
        td.style.borderRight = "2px solid black"; 
        td.style.borderTop = "2px solid black";
        td.style.borderBottom = "2px solid black";
    });

    

    contentbox2.style.backgroundColor = "";
    contentbox2.style.border="1px solid rgb(161, 160, 160)";
    house.style.color="black";
    
    timeline.forEach(item => {
        item.style.border = "1px solid rgb(161, 160, 160)"; 
        
    });
    title.forEach(items => {
        items.style.color = "rgb(121, 120, 120)"; 
        
    });
    descriptions.forEach(desc => {
        desc.style.color = "black"; // Change to desired color
    });

    contactdetails.style.backgroundColor = ""; 
    contactdetails.style.border="1px solid rgb(161, 160, 160)";
    contact.style.color="black";

    thelements.forEach(th => {
        th.style.backgroundColor = ""; 
        th.style.color = "black";
        th.style.borderRight = "2px solid black"; 
        th.style.borderLeft = "2px solid black"; 
        th.style.borderTop = "2px solid black";
        th.style.borderBottom = "2px solid black";  
    });
    
    
    tdelements.forEach(td => {
        td.style.backgroundColor = ""; 
        td.style.color = "black"; 
        td.style.borderLeft = "2px solid black"; 
        td.style.borderRight = "2px solid black"; 
        td.style.borderTop = "2px solid black";
        td.style.borderBottom = "2px solid black";
    });


    footer.style.backgroundColor = "rgb(201, 215, 209)"; 
    footer.style.borderTop="1px solid rgb(161, 160, 160)";
    footer.style.color="#2b2727";

    anchors.forEach(anchor => {
        anchor.style.color = "#666363"; // Change to desired color
        
        anchor.addEventListener("mouseover", () => {
            anchor.style.color = "black";
            anchor.style.background = "conic-gradient(from 45deg, #EA4335 10%, #FBBC05 90%)";
            anchor.style.borderRadius = "20px";
            anchor.style.transition = "all 0.3s ease";
            anchor.style.position = "relative";
            
        });

        anchor.addEventListener("mouseout", () => {
            anchor.style.background = ""; // Resets to default when not hovering
            anchor.style.color = "#666363";
            
        });

        anchor.addEventListener("mousedown", () => {
            anchor.style.transform = "scale(1)";
            anchor.style.boxShadow = "0 0 10px #8a9742"; 
        });
    
        anchor.addEventListener("mouseup", () => {
            anchor.style.boxShadow = "none";
        });
    });
    

    
    address.style.backgroundColor="rgb(210, 230, 209)";
    locationSpan.style.color="black";
    locationSpan.style.background="conic-gradient(from 45deg, #EA4335 10%, #FBBC05 90%)";  
    serverSpan.style.color="black";
    serverSpan.style.background="conic-gradient(from 45deg, #EA4335 10%, #FBBC05 90%)";  
    
    
});

// Event listener for Light (specific color changes)
light.addEventListener("click", () => {
    websearch.style.background="#daebc7";
    websearch.style.color="#2b2727";

    output.style.background="linear-gradient(135deg, #f9f8cd, #daebc7)";
    output.style.color="#2b2727";
  
   

    menuSection.style.background="#daebc7";
    menuSection.style.border="1px solid rgb(161, 160, 160)";
    menuSection.style.color="#2b2727";

    profileInfo.style.background="#daebc7";
    profileInfo.style.border="1px solid rgb(161, 160, 160)";
    head2.style.color="#2b2727";
    theme.style.color="#2b2727";
    photoh4.style.color="#2b2727";
    btn.style.color="#2b2727";

    slider.style.background="#daebc7";
    sliderelements.forEach(elements => {
        elements.style.color = "#2b2727"; 
        elements.addEventListener("mouseover", () => {
            elements.style.color = "white";
            
            
        });

        elements.addEventListener("mouseout", () => {

            elements.style.color = "#2b2727";
            
        });
        
    });

    body.style.background="#b6c796";
    navbar.style.backgroundColor = "#96b23c"; // White
    navbar.style.color = "#2b2727"; 
    icons.style.color="#2b2727";
    secondhead.style.backgroundColor = "#b6c796"; 
    secondhead.style.color = "#2b2727";
    
    function changeTextColors(linkColor, paragraphColor) {
        links.forEach(link => {
            link.style.color = linkColor;
        });
    
        paragraphs.forEach(para => {
            para.style.color = paragraphColor;
        });
    }

    changeTextColors("#2b2727", "#2b2727");
    icons1.style.boxShadow="0 0 5px black"
    icons2.style.color="#2b2727";
    menubar.style.backgroundColor = "#daebc7 ";
    menubar.style.borderTop="1px solid rgb(161, 160, 160)";
    menubar.style.borderBottom="1px solid rgb(161, 160, 160)";

    contentbox1.style.backgroundColor = "";
    contentbox1.style.border="1px solid rgb(161, 160, 160)";
    bio.style.color="black";
    userinfo.style.background="#b6c796";
    
    thElements.forEach(th => {
        th.style.backgroundColor = ""; 
        th.style.color = "black";
        th.style.borderLeft = "2px solid black"; 
        th.style.borderTop = "2px solid black";
        th.style.borderBottom = "2px solid black";  
    });
    
    
    tdElements.forEach(td => {
        td.style.backgroundColor = ""; 
        td.style.color = "black"; 
        td.style.borderRight = "2px solid black"; 
        td.style.borderTop = "2px solid black";
        td.style.borderBottom = "2px solid black";
    });

    

    contentbox2.style.backgroundColor = "";
    contentbox2.style.border="1px solid rgb(161, 160, 160)";
    house.style.color="black";
    
    timeline.forEach(item => {
        item.style.border = "1px solid rgb(161, 160, 160)"; 
        
    });
    title.forEach(items => {
        items.style.color = "rgb(121, 120, 120)"; 
        
    });
    descriptions.forEach(desc => {
        desc.style.color = "black"; // Change to desired color
    });

    contactdetails.style.backgroundColor = ""; 
    contactdetails.style.border="1px solid rgb(161, 160, 160)";
    contact.style.color="black";

    thelements.forEach(th => {
        th.style.backgroundColor = ""; 
        th.style.color = "black";
        th.style.borderRight = "2px solid black"; 
        th.style.borderLeft = "2px solid black"; 
        th.style.borderTop = "2px solid black";
        th.style.borderBottom = "2px solid black";  
    });
    
    
    tdelements.forEach(td => {
        td.style.backgroundColor = ""; 
        td.style.color = "black"; 
        td.style.borderLeft = "2px solid black"; 
        td.style.borderRight = "2px solid black"; 
        td.style.borderTop = "2px solid black";
        td.style.borderBottom = "2px solid black";
    });


    footer.style.backgroundColor = "#daebc7"; 
    footer.style.borderTop="1px solid rgb(161, 160, 160)";
    footer.style.color="#2b2727";

    anchors.forEach(anchor => {
        anchor.style.color = "#666363"; // Change to desired color
        
        anchor.addEventListener("mouseover", () => {
            anchor.style.color = "black";
            anchor.style.background = "conic-gradient(from 45deg, #EA4335 10%, #FBBC05 90%)";
            anchor.style.borderRadius = "20px";
            anchor.style.transition = "all 0.3s ease";
            anchor.style.position = "relative";
            
        });

        anchor.addEventListener("mouseout", () => {
            anchor.style.background = ""; // Resets to default when not hovering
            anchor.style.color = "#666363";
            
        });

        anchor.addEventListener("mousedown", () => {
            anchor.style.transform = "scale(1)";
            anchor.style.boxShadow = "0 0 10px #8a9742"; 
        });
    
        anchor.addEventListener("mouseup", () => {
            anchor.style.boxShadow = "none";
        });
    });
    

    
    address.style.backgroundColor="#628d3d";
    locationSpan.style.color="black";
    locationSpan.style.background="conic-gradient(from 45deg, #EA4335 10%, #FBBC05 90%)";  
    serverSpan.style.color="black";
    serverSpan.style.background="conic-gradient(from 45deg, #EA4335 10%, #FBBC05 90%)";
    
});












document.addEventListener("DOMContentLoaded", function () {
    const chatboat = document.getElementById("chatboat");
    const chatWindow = document.getElementById("chatWindow");
    const closeChat = document.getElementById("closeChat");
    const sendMessage = document.getElementById("sendMessage");
    const userInput = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
    const largeView = document.getElementById("largeView");

    // Show chat when clicking on the chatbot icon
    chatboat.addEventListener("click", function () {
        chatWindow.classList.toggle("chat-visible");
    });

    // Close chat
    closeChat.addEventListener("click", function () {
        chatWindow.classList.remove("chat-visible");
    });

    largeView.addEventListener("click", function () {
        window.location.href = "chatbot.html";
    });
    
    // Send message
    sendMessage.addEventListener("click", function () {
        sendMessageToChat();
    });

    // Send message when pressing Enter
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessageToChat();
        }
    });

    function sendMessageToChat() {
        let userText = userInput.value.trim();
        if (userText === "") return;

        // Add User Message
        chatBody.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
        userInput.value = "";

        // Bot Reply (Simple)
        setTimeout(() => {
            let botResponse = getBotResponse(userText);
            chatBody.innerHTML += `<div><strong>ChatNova:</strong> ${botResponse}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
    }

    function getBotResponse(input) {
        // Simple responses (You can improve this!)
        const responses = {
            "hello": "Hi there! How can I assist you?",
            "how are you": "I'm just a bot, but I'm doing great!",
            "bye": "Goodbye! Have a great day!",
            "default": "I'm not sure how to respond to that."
        };

        let response = responses[input.toLowerCase()] || responses["default"];
        return response;
    }
});


























