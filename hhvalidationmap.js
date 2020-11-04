// initial load will be for 2015 data
var yearview = '2015'
var datavar = run4_2015
$('#source').text("Model: Populationsim run 2015-4 (2013-2017 PUMS).  Observed: 2013-2017 PUMS.  Income is in 1999$");


$('#yearselection .btn').on('click', function() {
    yearview = ($(this).val())
    if (yearview == 2010) {
        $('#yearselection .dropdown-menu a').click(function () {
            which10 = (($(this).text()))
            updateYear(which10)
            buttonnot20();
        })
    }
    if (yearview == 2015) {
        $('#yearselection .dropdown-menu a').click(function () {
            which15 = (($(this).text()))
            updateYear(which15)
            buttonnot20();
        })
    }
    if (yearview == 2020) {
        $('#yearselection .dropdown-menu a').click(function () {
            which20 = (($(this).text()))
            updateYear(which20)
            button20()
        })
    }
})

function button20() {
    $('#hhvalbuttons').empty();
    console.log('hi');
    $('#hhvalbuttons').html("\
    <div class='btn-group' role='group'>\
    <div class='btn-group' role='group'>\
      <button type='button' id='hhval1' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
        HH Size\
      </button>\
      <ul class='dropdown-menu' aria-labelledby='hhval1'>\
        <li><a class='dropdown-item'>1-person households</a></li>\
        <li><a class='dropdown-item'>2-person households</a></li>\
        <li><a class='dropdown-item'>3-person households</a></li>\
        <li><a class='dropdown-item'>4-person households</a></li>\
        <li><a class='dropdown-item'>5-person households</a></li>\
        <li><a class='dropdown-item'>6-person households</a></li>\
        <li><a class='dropdown-item'>7+-person households</a></li>\
      </ul>\
    </div>\
  </div>\
  <div class='btn-group' role='group'>\
  <div class='btn-group' role='group'>\
    <button type='button' id='hhval2' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
      HH Income\
    </button>\
    <ul class='dropdown-menu' aria-labelledby='hhval2'>\
      <li><a class='dropdown-item'>Household income <30k</a></li>\
      <li><a class='dropdown-item'>Household income 30k - 60k</a></li>\
      <li><a class='dropdown-item'>Household income 60k - 100k</a></li>\
      <li><a class='dropdown-item'>Household income > 100k</a></li>\
    </ul>\
  </div>\
</div>\
<div class='btn-group' role='group'>\
  <div class='btn-group' role='group'>\
    <button type='button' id='hhval2' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
      Population\
    </button>\
    <ul class='dropdown-menu' aria-labelledby='hhval2'>\
      <li><a class='dropdown-item'>Adults</a></li>\
      <li><a class='dropdown-item'>Workers</a></li>\
      <li><a class='dropdown-item'>Children</a></li>\
    </ul>\
  </div>\
</div>\
</div>\
<div class='btn-group' role='group'>\
  <div class='btn-group' role='group'>\
    <button type='button' id='hhval2' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
      Householder Age\
    </button>\
    <ul class='dropdown-menu' aria-labelledby='hhval2'>\
      <li><a class='dropdown-item'>less than 35</a></li>\
      <li><a class='dropdown-item'>35-64</a></li>\
      <li><a class='dropdown-item'>greater than 64</a></li>\
    </ul>\
  </div>\
</div>\
</div>\
<div class='btn-group' role='group'>\
  <div class='btn-group' role='group'>\
    <button type='button' id='hhval2' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
      Building Type\
    </button>\
    <ul class='dropdown-menu' aria-labelledby='hhval2'>\
      <li><a class='dropdown-item'>1</a></li>\
      <li><a class='dropdown-item'>2</a></li>\
      <li><a class='dropdown-item'>3</a></li>\
      <li><a class='dropdown-item'>4</a></li>\
      <li><a class='dropdown-item'>5</a></li>\
      <li><a class='dropdown-item'>6</a></li>\
      <li><a class='dropdown-item'>7</a></li>\
      <li><a class='dropdown-item'>8</a></li>\
      <li><a class='dropdown-item'>9</a></li>\
      <li><a class='dropdown-item'>10</a></li>\
    </ul>\
  </div>\
</div>\
  ");

  d3.select('#hhmaptitle').text('')

  $('#hhvalbuttons .dropdown-menu a').click(function () {
    console.log(this);
    updateview(($(this).text()));
});
}


function buttonnot20() {
    $('#hhvalbuttons').empty();
    console.log('hi');
    $('#hhvalbuttons').html("\
    <div class='btn-group' role='group'> \
          <div class='btn-group' role='group'>\
            <button type='button' id='hhval1' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
              Household Size\
            </button>\
            <ul class='dropdown-menu' aria-labelledby='hhval1'>\
              <li><a class='dropdown-item'>1-person households</a></li>\
              <li><a class='dropdown-item'>2-person households</a></li>\
              <li><a class='dropdown-item'>3-person households</a></li>\
              <li><a class='dropdown-item'>4+ person households</a></li>\
            </ul>\
          </div>\
        </div>\
        <div class='btn-group' role='group'>\
          <div class='btn-group' role='group'>\
            <button type='button' id='hhval2' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
              Household Income\
            </button>\
            <ul class='dropdown-menu' aria-labelledby='hhval2'>\
              <li><a class='dropdown-item'>Household income <35k</a> </li> \
              <li><a class='dropdown-item'>Household income 35k - 65k</a></li>\
              <li><a class='dropdown-item'>Household income 65k - 100k</a></li>\
              <li><a class='dropdown-item'>Household income > 100k</a></li>\
            </ul>\
          </div>\
        </div>\
        <div class='btn-group' role='group'>\
          <div class='btn-group' role='group'>\
            <button type='button' id='hhval3' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
              Workers in Household\
            </button>\
            <ul class='dropdown-menu' aria-labelledby='hhval3'>\
              <li><a class='dropdown-item'>0-worker households</a></li>\
              <li><a class='dropdown-item'>1-worker households</a></li>\
              <li><a class='dropdown-item'>2-worker households</a></li>\
              <li><a class='dropdown-item'>3+ worker households</a></li>\
            </ul>\
          </div>\
        </div>\
        <div class='btn-group' role='group'>\
          <div class='btn-group' role='group'>\
            <button type='button' id='hhval4' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
              Household Vehicles\
            </button>\
            <ul class='dropdown-menu' aria-labelledby='hhval4'>\
              <li><a class='dropdown-item'>0-vehicle households</a></li>\
              <li><a class='dropdown-item'>1-vehicle households</a>\
              </li>\
              <li><a class='dropdown-item'>2+ vehicle households</a></li>\
            </ul>\
          </div>\
        </div>\
  ");

  d3.select('#hhmaptitle').text('')

  $('#hhvalbuttons .dropdown-menu a').click(function () {
    console.log(this);
    updateview(($(this).text()));
});
}

function updateYear(yearview) {
    if (yearview == 'ABM') {
        datavar = run4_2015
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run 2015-4 (2013-2017 PUMS).  Observed: 2013-2017 PUMS.  Income is in 1999$");
    }
    if (yearview == 'urbansim') {
        datavar = runurbansim2015
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run - urbansim future year 2015 (2008-2012 PUMS seed).  Observed: 2013-2017 PUMS.  Income is in 1999$");
    }
    if (yearview == 'popsim23') {
        datavar = run4_2010
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run popsim23 (2008-2012 PUMS).  Observed: 2008-2012 PUMS.  Income is in 2012$");
    }

    if (yearview == 'popsim24') {
        datavar = run5_2010
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run popsim24 (2008-2012 PUMS).  Observed: 2008-2012 PUMS.  Income is in 2012$");
    }

    if (yearview == 'popsim25') {
        datavar = run6_2010
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run popsim25 (2008-2012 PUMS).  Observed: 2008-2012 PUMS.  Income is in 2012$");
    }

    if (yearview == 'popsim26') {
        datavar = run7_2010
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run popsim26 (2008-2012 PUMS).  Observed: 2008-2012 PUMS.  Income is in 2012$");
    }
    if (yearview == 'trip-based model') {
        datavar = run2020
        clearmap()
        drawmap()
        $('#source').text("Model: PopulationSim run (2014-2018 PUMS).  Observed: 2020 PopulationSim Controls.  Income is in 2019$");
    }
}

// basic map
var mapboxAccessToken = 'pk.eyJ1Ijoic2FyYWhjbWFwIiwiYSI6ImNqc3VzMDl0YzJocm80OXBnZjc2MGk4cGgifQ.S_UmPA1jm5pQPrCCLDs41Q';
var lat = 41.8781;
var long = -87.8298;

var map = new L.Map("hhvalidationmap", {
    zoomControl: false,
    center: new L.LatLng(lat, long),
    zoom: 8
});

var center = new L.LatLng(lat, long);

function zoomTo(location, map) {
    map.setView(location, 8);
}

var baselayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v10',
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1
})

map.addLayer(baselayer);

function highlightFeatureCounty(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'black',
        dashArray: '',
        fillOpacity: 0,
    });
}

function resetHighlightCounty(e) {
    var layer = e.target;

    layer.setStyle(
        countystyle(layer.feature)
    );
}

function countystyle(feature) {
    return {
        weight: 2.5,
        fillOpacity: 0,
        color: 'black',
        dashArray: '',
        className: feature.properties.COUNTY
    };
}

var countiesmini = L.geoJSON(countiesdatamini, {
    style: countystyle,
    interactive: false
})
var baseLayers = {
    "Baselayer": baselayer
};

var overlays = {
    "Counties": countiesmini
};


// control that shows state info on hover
var info = L.control();

info.onAdd = function () {
    this._div = L.DomUtil.create('div', 'infoval');
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = (props ?
        '<table id="datatable"> <tr> <td style="width:105px">PUMA </td> <td>' + props.NAME_NEW + '</td> </tr> <tr> <td> Attribute </td> <td>' + whichone_name + '</td> </tr> <tr> <td>Difference</td> <td>' + Math.round((100 * props[whichone]) * 100) / 100 + '<br> percentage points' + '</td> </tr> <tr> <td>Model Count</td> <td>' + props[model_count_var] + '</td> </tr> <tr> <td>Observed Count</td> <td>' + props[census_count_var] + '</td> </tr></table>'
        : 'Hover over a PUMA');
};

info.addTo(map);

// settings for initial page load
var whichone = 'difAU_0'
var whichone_name = '0-vehicle households'
var model_count_var = 'HHAU_0m'
var census_count_var = 'HHAU_0p'
var firsttime = true
d3.select('#hhmaptitle').text('0-vehicle households')
drawmap()


// dropdown button events
function updateview(buttonarg) {
    d3.select('#hhmaptitle').text(buttonarg)

    if (buttonarg == '1-person households') {
        whichone = 'difSZ_1'
        model_count_var = 'HHSZ_1m'
        census_count_var = 'HHSZ_1p'
        whichone_name = '1-person households';
    }
    else if (buttonarg == '2-person households') {
        whichone = 'difSZ_2'
        model_count_var = 'HHSZ_2m'
        census_count_var = 'HHSZ_2p'
        whichone_name = '2-person households';
    }
    else if (buttonarg == '3-person households') {
        whichone = 'difSZ_3'
        model_count_var = 'HHSZ_3m'
        census_count_var = 'HHSZ_3p'
        whichone_name = '3-person households';
    }
    else if (buttonarg == '4+ person households') {
        whichone = 'difSZ_4'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHSZ_4p'
        whichone_name = '4+ person households';
    }
    else if (buttonarg == '4-person households') {
        whichone = 'ps4d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE4'
        whichone_name = '4 person households';
    }
    else if (buttonarg == '5-person households') {
        whichone = 'ps5d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE5'
        whichone_name = '5 person households';
    }
    else if (buttonarg == '6-person households') {
        whichone = 'ps6d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE6'
        whichone_name = '6 person households';
    }
    else if (buttonarg == '7+-person households') {
        whichone = 'ps7d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'SIZE7P'
        whichone_name = '7+ person households';
    }
    else if (buttonarg == 'Adults') {
        whichone = 'pad'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'ADLT'
        whichone_name = 'Adults';
    }
    else if (buttonarg == 'Workers') {
        whichone = 'pwd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'WRKR'
        whichone_name = 'Workers';
    }
    else if (buttonarg == 'Children') {
        whichone = 'pkd'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'KID'
        whichone_name = 'Children';
    }
    else if (buttonarg == 'less than 35') {
        whichone = 'ph35d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHRU35'
        whichone_name = 'HH less than 35';
    }
    else if (buttonarg == '35-64') {
        whichone = 'ph3564d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHR3564'
        whichone_name = 'HH 35-64';
    }
    else if (buttonarg == 'greater than 64') {
        whichone = 'ph65d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'HHRO64'
        whichone_name = 'HH greater than 64';
    }
    else if (buttonarg == '1') {
        whichone = 'pb1d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE1'
        whichone_name = 'Mobile home or trailer';
    }
    else if (buttonarg == '2') {
        whichone = 'pb2d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE2'
        whichone_name = 'One-family detached';
    }
    else if (buttonarg == '3') {
        whichone = 'pb3d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE3'
        whichone_name = 'One-family attached';
    }
    else if (buttonarg == '4') {
        whichone = 'pb4d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE4'
        whichone_name = '2 Apartments';
    }
    else if (buttonarg == '5') {
        whichone = 'pb5d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE5'
        whichone_name = '3-4 Apartments';
    }
    else if (buttonarg == '6') {
        whichone = 'pb6d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE6'
        whichone_name = '5-9 Apartments';
    }
    else if (buttonarg == '7') {
        whichone = 'pb7d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE7'
        whichone_name = '10-19 Apartments';
    }
    else if (buttonarg == '8') {
        whichone = 'pb8d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE8'
        whichone_name = '20-49 Apartments';
    }
    else if (buttonarg == '9') {
        whichone = 'pb9d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE9'
        whichone_name = '50+ Apartments';
    }
    else if (buttonarg == '10') {
        whichone = 'pb10d'
        model_count_var = 'HHSZ_4m'
        census_count_var = 'BTYPE10'
        whichone_name = 'Boat, RV, van, etc.';
    }
    else if (buttonarg == 'Household income <35k') {
        whichone = 'difINC_1'
        model_count_var = 'HHINC_1m'
        census_count_var = 'HHINC_1p'
        whichone_name = 'Household income <35k';
    }
    else if (buttonarg == 'Household income 35k - 65k') {
        whichone = 'difINC_2'
        model_count_var = 'HHINC_2m'
        census_count_var = 'HHINC_2p'
        whichone_name = 'Household income 35k - 65k';
    }
    else if (buttonarg == 'Household income 65k - 100k') {
        whichone = 'difINC_3'
        model_count_var = 'HHINC_3m'
        census_count_var = 'HHINC_3p'
        whichone_name = 'Household income 65k - 100k';
    }
    else if (buttonarg == 'Household income <30k') {
        whichone = 'difINC_1'
        model_count_var = 'HHINC_1m'
        census_count_var = 'HHINC_1p'
        whichone_name = 'Household income <30k';
    }
    else if (buttonarg == 'Household income 30k - 60k') {
        whichone = 'difINC_2'
        model_count_var = 'HHINC_2m'
        census_count_var = 'HHINC_2p'
        whichone_name = 'Household income 30k - 60k';
    }
    else if (buttonarg == 'Household income 60k - 100k') {
        whichone = 'difINC_3'
        model_count_var = 'HHINC_3m'
        census_count_var = 'HHINC_3p'
        whichone_name = 'Household income 60k - 100k';
    }
    else if (buttonarg == 'Household income > 100k') {
        whichone = 'difINC_4'
        model_count_var = 'HHINC_4m'
        census_count_var = 'HHINC_4p'
        whichone_name = 'Household income > 100k';
    }
    else if (buttonarg == '0-worker households') {
        whichone = 'difWK_0'
        model_count_var = 'HHWK_0m'
        census_count_var = 'HHWK_0p'
        whichone_name = '0-worker households';
    }
    else if (buttonarg == '1-worker households') {
        whichone = 'difWK_1'
        model_count_var = 'HHWK_1m'
        census_count_var = 'HHWK_1p'
        whichone_name = '1-worker households';
    }
    else if (buttonarg == '2-worker households') {
        whichone = 'difWK_2'
        model_count_var = 'HHWK_2m'
        census_count_var = 'HHWK_2p'
        whichone_name = '2-worker households';
    }
    else if (buttonarg == '3+ worker households') {
        whichone = 'difWK_3'
        model_count_var = 'HHWK_3m'
        census_count_var = 'HHWK_3p'
        whichone_name = '3+ worker households';
    }
    else if (buttonarg == '0-vehicle households') {
        whichone = 'difAU_0'
        model_count_var = 'HHAU_0m'
        census_count_var = 'HHAU_0p'
        whichone_name = '0-vehicle households';
    }
    else if (buttonarg == '1-vehicle households') {
        whichone = 'difAU_1'
        model_count_var = 'HHAU_1m'
        census_count_var = 'HHAU_1p'
        whichone_name = '1-vehicle households';
    }
    else if (buttonarg == '2+ vehicle households') {
        whichone = 'difAU_2'
        model_count_var = 'HHAU_2m'
        census_count_var = 'HHAU_2p'
        whichone_name = '2+ vehicle households';
    }
    return whichone,
        updatemap();
}

$('#hhvalbuttons .dropdown-menu a').click(function () {
    updateview(($(this).text()));
});


// start mode button events
function updatemap() {
    map.eachLayer(function (layer) {
        if (![baselayer].includes(layer)) {
            map.removeLayer(layer);
        }
    });
    firsttime = false
    drawmap();
}


function drawmap() {
    diffdata = L.geoJson(datavar, { style: style, onEachFeature: onEachFeature }).addTo(map);
    map.addLayer(countiesmini)
}

function getDiffColor(d) {
    return d > 7.5 ? '#1C4E80' :
        d > 5 ? '#4A729A' :
            d > 2.5 ? '#8FA8C1' :
                d < -7.5 ? '#D00000' :
                    d < -5 ? '#DA3434' :
                        d < - 2.5 ? '#EE9C9C' :
                            '#EBF0F5';
}

function style(feature) {
    return {
        fillColor: getDiffColor(100 * feature.properties[whichone]),
        weight: 2,
        opacity: 1,
        color: 'grey',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeaturePuma(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'orange',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

var geojson;
geojson = L.geoJson(datavar, { style: style });

function resetHighlightPuma(e) {
    geojson.resetStyle(e.target);
    info.update();
    if (map.hasLayer(countiesmini)) {
        countiesmini.bringToFront()
    }
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeaturePuma,
        mouseout: resetHighlightPuma
    });
}

var difflegend = L.control({ position: 'bottomright' });
difflegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'difflegend'),
        grades = [-20, -7.5, -5, -2.5, 2.5, 5, 7.5, 20],
        labels = [],
        from, to;

    for (var i = 0; i < grades.length - 1; i++) {
        from = grades[i];
        var from_str = String(from)
        var middle = ' to '
        to = grades[i + 1];
        var to_str = String(to)
        if (i == 0) {
            from_str = ''
            middle = ''
            to_str = '-7.5+'
        }
        if (i == 6) {
            middle = ''
            to_str = '+'
        }
        labels.push(
            '<i style="background:' + getDiffColor(from + 1) + '"></i> ' +
            from_str + middle + to_str)
    }
    div.innerHTML = "<h6>Difference (%) </h6>" + labels.join('<br>');
    return div;
};

difflegend.addTo(map);
L.control.layers(baseLayers, overlays, { hideSingleBase: true, position: 'bottomleft' }).addTo(map);

function clearmap() {
    diffdata.remove();
    countiesmini.remove();
}

