var floodedArea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1490, 3203, 4953, 6589, 8095, 9549, 10937, 12286, 13589, 14935, 16181, 17378, 18612, 19879, 21077, 22362, 23628, 24972, 26220, 27456, 28634, 29860, 31211, 32519, 33839, 35196, 36531, 37940, 39348, 40814, 42437, 44035, 45634, 47335, 49233, 51416, 53601, 55867, 58299, 60921, 63652, 66317, 69199, 72268, 75446, 78601, 81864, 85418, 89184, 93325, 97698, 102412, 107489, 112777, 118236, 123800, 129391, 135557, 142116, 149012, 156147, 163143, 170565, 177990, 185393, 193010, 200989, 208996, 217509, 226607, 236789, 247376, 257752, 268767, 279799, 290778, 302437, 313776, 324833, 335446, 345785, 355574, 365096, 374258, 383433, 392380, 401102, 409741, 418329, 427246, 436558, 446469, 456350, 466358, 476249, 485766, 495088, 503916, 512657, 521199, 529947, 538952, 548502, 559182, 570100, 583232, 600867, 623251, 646450, 669104, 680708, 691995, 701960, 705407, 706882, 708468, 710003, 711696, 713328, 713579, 713623, 713633, 713639, 713643, 713645, 713646, 713649];
var populationAffected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 433.3414230206, 1190.7098218365, 1936.7279271766997, 4643.251289624301, 7617.4966347501, 9881.7209112086, 20510.205262738506, 21416.357691630106, 21654.559355273606, 21972.280300560506, 23387.623841787605, 23801.425000006104, 31285.488604242702, 34903.223991743005, 38631.240854165306, 39812.3909980828, 49010.871558286606, 49354.75502794885, 50993.114095830846, 61817.02917931965, 63539.71102878915, 66097.60192126106, 72509.41899664885, 73841.36247253255, 80824.11417415795, 86711.77344115224, 92074.27619495004, 95952.29279012795, 96945.01624699829, 101669.6115929211, 102144.6575240119, 104195.0284712309, 106573.6916931631, 108382.20700666773, 113906.14751232899, 118577.59704599681, 133926.0087127922, 147326.5568898691, 164255.1095278919, 182133.1492731245, 201929.2925967082, 232964.5360879126, 286886.1726928093, 368311.4249998968, 431587.944465458, 479405.61112483393, 528574.3746725372, 595083.4417082717, 653166.9176735576, 687972.470586225, 739895.1759675085, 763057.033972411, 790598.6792799364, 833994.9043415042, 854118.9196564924, 875336.8828744892, 890241.9077960111, 901871.977614848, 908333.1418343767, 917019.4394749106, 953110.2902411348, 979448.8308659459, 1004738.8063997217, 1021104.8846519082, 1036213.3861753311, 1043738.200613843, 1054962.0500284287, 1064910.3191674377, 1073578.0317890737, 1085077.7437850488, 1095269.8513327972, 1119075.29005972, 1147536.3215088334, 1174698.200739718, 1193921.9471963912, 1208023.1532476323, 1235630.0289929616, 1267494.3760574088, 1292652.2282064955, 1355262.5666512798, 1388853.3319613056, 1425404.522997544, 1462075.2604720306, 1545702.6062244328, 1642069.429927867, 1683494.1002781787, 1755580.636285668, 1843478.211307259, 2000468.686094405, 2073868.0254625485, 2290902.1642398345, 2428567.989350171, 2725168.3906087168, 2951329.5513942325, 3095499.499066823, 3231551.6873894166, 3412256.9473765674, 3618091.565232459, 3769750.171453185, 3926652.133570897, 4135552.708046079, 4295250.253285975, 4453152.870714402, 4721522.743430695, 5313507.841659875, 6545440.8888113815, 15317115.215212733, 270960746.44625497, 390205077.05938077, 393122025.827554, 395011972.96907675, 396090985.9749524, 396895609.85189646, 396934460.319499, 396936258.4839765, 396936266.93670815, 396936274.0478053, 396936278.4771527, 396936280.8778235, 396936281.5337237, 396936287.92187685, 396936287.95873815, 396936287.99815166, 396936288.05590695, 396936288.0748857, 396936288.07634735, 396936293.1942608]; 

var generatePredefinedHeights = function() {
    var minh = -10921, maxh = 8848;
    var a = [0];
    //height
    var h=0;
    for (var i=1; i < 128; i++) {
        h+=Math.max(Math.floor(h*0.063705), 1);
        a.push(h);
    }
    //deeep
    h=0;
    for (var i=1; i<128+1; i++) {
        h+=Math.max(Math.floor(h*0.065055), 1);
        a.unshift(-h);
    }
    return a;
};
var predefinedHeights = generatePredefinedHeights();