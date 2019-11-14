// initial load will be for 2015 data
var yearview = '2015'
var datavar = run4_2015
$('#source').text("Model: Populationsim run 2015-4 (2013-2017 PUMS).  Observed: 2013-2017 PUMS.  Income is in 1999$");


$('#yearselection .btn').on('click', function() {
    yearview = ($(this).find('input').val())
    updateYear(yearview)
})

function updateYear(yearview) {
    if (yearview == '2015') {
        datavar = run4_2015
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run 2015-4 (2013-2017 PUMS).  Observed: 2013-2017 PUMS.  Income is in 1999$");
    }
    if (yearview == '2010') {
        datavar = run1_2010
        clearmap()
        drawmap()
        $('#source').text("Model: Populationsim run popsim21_try2 (2008-2012 PUMS).  Observed: 2008-2012 PUMS.  Income is in 2012$");
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

var baselayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
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
        '<table id="datatable"> <tr> <td style="width:105px">PUMA </td> <td>' + props.NAME_NEW + '</td> </tr> <tr> <td> Attribute </td> <td>' + whichone_name + '</td> </tr> <tr> <td>Difference</td> <td>' + Math.round((100 * props[whichone]) * 100) / 100 + '<br> percentage points' + '</td> </tr> <tr> <td>Model Count</td> <td>' + props[model_count_var] + '</td> </tr> <tr> <td>Census Count</td> <td>' + props[census_count_var] + '</td> </tr></table>'
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
    div.innerHTML = "<h6>Difference</h6>" + labels.join('<br>');
    return div;
};

difflegend.addTo(map);
L.control.layers(baseLayers, overlays, { hideSingleBase: true, position: 'bottomleft' }).addTo(map);

function clearmap() {
    diffdata.remove();
}

