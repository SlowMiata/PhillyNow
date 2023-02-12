const scroll = new SmoothScroll('a[href*="#"]');

const buttonStage1 = document.querySelector('#startRoadMap');
const stage1Img = document.querySelector('#stage1Img');
const stage1Text = document.querySelector('#stage1Text');

const buttonStage2 = document.querySelector('#buttonStage2');
const stage2Img = document.querySelector('#stage2Img');

const buttonStage3 = document.querySelector('#buttonStage3');
const stage3Img = document.querySelector('#stage3Img');

const slideInLeft = [
    { transform: 'translateX(-500px)'},
    { transform: 'translateX(0px)'}
];

const slideInRight = [
    { transform: 'translateX(500px)'},
    { transform: 'translateX(0px)'}
];

const animTimingFast = {
    duration: 2500,
    iterations: 1,
}
const animTimingSlow = {
    duration: 3500,
    iterations: 1,
}



const image = document.querySelector('#slideDownA');

buttonStage1.addEventListener('click', function() {
    image.style.transform = "translateY(300px)";
    stage1Img.animate(slideInLeft, animTimingFast);
    stage1Img.style = "visibility: visible";
    stage1Text.style = "opacity: 1";
    buttonStage1.style = "visibility: hidden";
    buttonStage2.style = "opacity: 1";
});

buttonStage2.addEventListener('click', function() {
    image.style.transform = "translateY(635px)";
    stage2Img.animate(slideInRight, animTimingFast);
    stage2Img.style = "visibility: visible";
    stage2Text.style = "opacity: 1";
    buttonStage2.style = "visibility: hidden";
    buttonStage3.style = "opacity: 1";
});

buttonStage3.addEventListener('click', function() {
    image.style.transform = "translateY(1050px)";
    stage3Img.animate(slideInLeft, animTimingFast);
    stage3Img.style = "visibility: visible";
    stage3Text.style = "opacity: 1";
    buttonStage3.style = "visibility: hidden";
});


function toggleDiv(divid)
  {
 
    varon = divid + 'on';
    varoff = divid + 'off';
 
    if(document.getElementById(varon).style.display == 'block')
    {
    document.getElementById(varon).style.display = 'none';
    document.getElementById(varoff).style.display = 'block';
    }
   
    else
    {  
    document.getElementById(varoff).style.display = 'none';
    document.getElementById(varon).style.display = 'block'
    }
} 

let crime2023 = "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023.csv";
let crime2022 =  "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202022.csv";
let theft = "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023%20THEFT.csv"
let assault = "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023%20ASSAULT.csv";
let rape = "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023%20RAPE.csv"
let homicide = "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023%20HOMICIDE.csv"
let drug_violation =" https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023%20DRUG%20VIOLATION.csv"
let robbery = "https://raw.githubusercontent.com/hahuynh1/owlhack/main/Philly%20Crime%20Stat%202023%20ROBBERY.csv"


    //these are the other csv files

    /*longitude, latitude for universites
    Temple -39.9812° N, 75.1554° W 
    UPenn -39.9522° N, 75.1932° W
    LaSalle -40.0390° N, 75.1558° W
    Drexel - 39.9566° N, 75.1899° W
    */ 
        

        

    d3.csv(
    crime2022, 
    function(err, rows) {
        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];
            });
        }

        var data = [
            {
                type: "scattermapbox",
                text: unpack(rows, "crime_category"),
                lon: unpack(rows, "point_x"),
                lat: unpack(rows, "point_y"),
                marker: { color: "fuchsia", size: 6, opacity: 1 }
            }
        ];

        var layout = {
            title: 'Responsive to window size!',
            dragmode: "zoom.0214",
            mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 },
            margin: { r: 0, t: 0, b: 0, l: 0 }
        };

        Plotly.newPlot("mydiv22", data, layout);
    }
);

d3.csv(
    crime2023, 
    function(err, rows) {
        function unpack(rows, key) {
            return rows.map(function(row) {
                return row[key];    
            });
        }

        var data = [
            {
                type: "scattermapbox",
                text: unpack(rows, "crime_category"),
                
                lon: unpack(rows, "point_x"),
                lat: unpack(rows, "point_y"),
                marker: { color: "blue", size: 6, opacity: 1 }
            }
        ];

        var layout = {
            title: 'Responsive to window size!',
            dragmode: "zoom.0214",
            mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
            margin: { r: 0, t: 0, b: 0, l: 0 }
        };

        Plotly.newPlot("mydiv23", data, layout);
    }
);

d3.csv(
  crime2023, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "red", size: 10, opacity: 1 }
          }
      ];

      var layout = {
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9812, lon: -75.1554 }, zoom: 15 }, //temple University Temple -39.9812° N, 75.1554° W 

          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivTemple", data, layout);
  }
);

d3.csv(
  crime2023, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "cyan", size: 10, opacity: 1 }
          }
      ];

      var layout = {
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9522, lon: -75.1932 }, zoom: 15 }, // UPenn -39.9522° N, 75.1932° W

          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivUPenn", data, layout);
  }
);






d3.csv(
  assault, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];    
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "red", size: 6, opacity: 1 }
          }
      ];

      var layout = {
          title: 'Responsive to window size!',
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivASSAULT", data, layout);
  }
);

d3.csv(
  drug_violation, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];    
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "black", size: 6, opacity: 1 }
          }
      ];

      var layout = {
          title: 'Responsive to window size!',
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivDRUG_VIOLATION", data, layout);
  }
);
d3.csv(
  homicide, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];    
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "orange ", size: 6, opacity: 1 }
          }
      ];

      var layout = {
          title: 'Responsive to window size!',
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivHOMICIDE", data, layout);
  }
);
d3.csv(
  rape, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];    
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "brown", size: 6, opacity: 1 }
          }
      ];

      var layout = {
          title: 'Responsive to window size!',
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivRAPE", data, layout);
  }
);
d3.csv(
  robbery, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];    
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "green", size: 6, opacity: 1 }
          }
      ];

      var layout = {
          title: 'Responsive to window size!',
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivROBBERY", data, layout);
  }
);

d3.csv(
  theft, 
  function(err, rows) {
      function unpack(rows, key) {
          return rows.map(function(row) {
              return row[key];    
          });
      }

      var data = [
          {
              type: "scattermapbox",
              text: unpack(rows, "crime_category"),
              lon: unpack(rows, "point_x"),
              lat: unpack(rows, "point_y"),
              marker: { color: "pink", size: 6, opacity: 1 }
          }
      ];

      var layout = {
          title: 'Responsive to window size!',
          dragmode: "zoom.0214",
          mapbox: { style: "open-street-map", center: { lat: 39.9587, lon: -75.165 }, zoom: 11 }, //the whole map
          margin: { r: 0, t: 0, b: 0, l: 0 }
      };

      Plotly.newPlot("mydivTHEFT", data, layout);
  }
);