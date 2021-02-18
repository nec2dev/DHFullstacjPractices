var myheader = new Vue({
    el: '#myHeader',
    template: `
    <div class="container pt-3">
    <div class="row">
    <div class="col sm-2">
    <a href="home.html"><img src="https://i.postimg.cc/sxYS1DR7/TGIF-Logo.png" class="float-left img-fluid" alt="logo"></a></div>
    <div class="col sm-8">
    <p></p>
    </div>
    <div class="col sm-2 align-self-center"> 
    <p class="float-right"><i class="fas fa-envelope"></i><a href="mailto:info@tgif.net?Subject=Hello%20again"><b> info@tgif.net</b></a></p> 
    </div>
    </div>
    </div>
    `
});

var mynav = new Vue({
    el: '#myNav',
    template: `
    <nav class="container navbar navbar-inverse text-dark bg-light border border-primary mt-3 text-center" style="-webkit-filter: drop-shadow(0px 5px 10px black);">
    <div class="container-fluid x-auto">
    <ul>
    <li class="active" style="display: inline; margin-right: 20px;margin-left: 20px;"><a href="home.html"><b>Home</b></a></li>
    <li class="dropdown" style="display: inline; margin-left: 20px;"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><b>Congress 113</b><span class="caret"></span></a> 
    <ul class="dropdown-menu">
    <li style="margin-left: 20px;"><a href="house-data.html"><b>House</b></a></li>
    <li style="margin-left: 20px;"><a href="senate-data.html"><b>Senate</b></a></li>
    </ul>
    </li>
    <li class="dropdown" style="display: inline; margin-left: 20px;"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><b>Attendance</b><span class="caret"></span></a>
    <ul class="dropdown-menu">
    <li style="margin-left: 20px;"><a href="house-attendance.html"><b>House</b></a></li>
    <li style="margin-left: 20px;"><a href="senate-attendance.html"><b>Senate</b></a></li>
    </ul>
    </li>
    <li class="dropdown" style="display: inline; margin-left: 20px;"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><b>Party Loyalty</b><span class="caret"></span></a>
    <ul class="dropdown-menu">
    <li style="margin-left: 20px;"><a href="house-loyalty.html"><b>House</b></a></li>
    <li style="margin-left: 20px;"><a href="senate-loyalty.html"><b>Senate</b></a></li>
    </ul>
    </li>
    </ul>
    </div>
    </nav>   
    `
});

var filters = new Vue({
    el: '#myFilterForm',
    template: `
    <form name="filter" id="filterForm" action="method">
    <div class="mt-3 float-left">
    <label id="party"> Filter by party: </label>
    <input type="checkbox" name="party" value="R" rel="republican" id="republican" checked onchange="refreshTable()" class="ml-3"><label for="republican"> Republican </label>
    <input type="checkbox" name="party" value="D" rel="democrat" id="democrat" checked onchange="refreshTable()" class="ml-3"><label for="democrat"> Democrat </label>
    <input type="checkbox" name="party" value="I" rel="independent" id="independent" checked onchange="refreshTable()" class="ml-3"><label for="independent"> Independent </label>
    </div>
    <div class="mt-3 float-right">
    <label class="mr-3"> Filter by state: </label>
    <select id="dropStates" class="statefilter" name="stateFilter" onchange="refreshTable()">
    <option value="">All</option>
    </select>
    </div>
    </form>
    `
});

var footer = new Vue({
    el: '#myFooter',
    template: `
    <div class="mt-5 mb-5 mb-3 container text-primary bg-light border border-primary text-center" style="-webkit-filter: drop-shadow(0px 5px 10px black);"> 
    <p><img src="https://i.postimg.cc/sxYS1DR7/TGIF-Logo.png" class="mx-auto" style="width:100px;-webkit-filter:grayscale(100%);" alt="logo"><b>@2016TGIF // All Rights Reserved</b></p> 
    </div>
    </div>
    `
});