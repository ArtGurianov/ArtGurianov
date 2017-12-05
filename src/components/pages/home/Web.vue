<template>
    <div class="wrapper" style="background-color: rgba(0,0,0,0.3);">
        <div id="web-wrapper">
            <div class="it-header"><h3>Web Development</h3></div>
            <div class="it-body">
                <p style="display: inline-block;">This website is made using</br>the progressive javascript framework - Vue2</br>Server side is written in Node.js</br>You can hire me as a web developer</br>to make a new web application for you </br> or update an existing if it's made with: </br> Laravel(php), Vue2(js), Angular4(js), Flask(python) </br> Please go to the <span @click="$router.push('contact');" style="cursor: pointer; color: darkred; font-style: italic">contact page</span> </br> and send an email.</p>
            </div>
        </div>
        <div id="fintech-wrapper">
            <div class="it-header"><h3>FinTech</h3></div>
            <div class="it-body">Info coming soon...</br> </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
#web-wrapper {
    position: absolute;
    margin: 0;
    padding: 0;
    border: 1px solid white;
    top: 0;
}
#fintech-wrapper {
    position: absolute;
    margin: 0;
    padding: 0;
    border: 1px solid white;
    bottom: 0;
}
.it-header {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: white;
    font-family: "Times New Roman";
    font-style: italic;
}
.it-body {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: white;
    text-align: center;
}
/*DESKTOP*/
@media only screen
and (min-width : 768px) {
    .it-header h3 {
        font-size: 28px;
    }
    #web-wrapper {
        width: 50%;
        height: 100%;
        left: 0;
    }
    #fintech-wrapper {
        width: 50%;
        height: 100%;
        right: 0;
    }
    .it-body {
        font-size: 20px;
    }
}

/*MOBILE*/
@media only screen
and (max-width : 768px) {
    .it-header h3 {
        font-size: 20px;
    }
    #web-wrapper {
        width: 100%;
        height: 60%;
        left: 0;
    }
    #fintech-wrapper {
        width: 100%;
        height: 40%;
        left: 0;
    }
    .it-body {
        font-size: 15px;
    }
}
</style>