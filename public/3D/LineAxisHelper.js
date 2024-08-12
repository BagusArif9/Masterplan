THREE.LineAxisHelper = function (size, xcolor, ycolor, zcolor) {
    THREE.Object3D.call(this);

    var line;
    if (!Array.isArray(xcolor)) xcolor = [xcolor];
    if (!Array.isArray(ycolor)) ycolor = [ycolor];
    if (!Array.isArray(zcolor)) zcolor = [zcolor];

    // x
    var n = xcolor.length;
    var start_x = -size;
    for (var i = 0 ; i < n  ; i++) {
        var end_x = start_x + 2 * size / n;
        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(new THREE.Vector3(start_x, 0, 0));
        lineGeometry.vertices.push(new THREE.Vector3(end_x, 0, 0));
        start_x = end_x;
        line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: xcolor[i] }));;
        //	       line.rotation.z = - Math.PI / 2;
        this.add(line);
    }

    // y
    var n = ycolor.length;
    var start_y = -size;
    for (var i = 0 ; i < n  ; i++) {
        var end_y = start_y + 2 * size / n;
        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(new THREE.Vector3(0, start_y, 0));
        lineGeometry.vertices.push(new THREE.Vector3(0, end_y, 0));
        start_y = end_y;
        line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: ycolor[i] }));;
        this.add(line);
    }

    // z
    var n = zcolor.length;
    var start_z = -size;
    for (var i = 0 ; i < n  ; i++) {
        var end_z = start_z + 2 * size / n;
        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(new THREE.Vector3(0, 0, start_z));
        lineGeometry.vertices.push(new THREE.Vector3(0, 0, end_z));
        start_z = end_z;
        line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: zcolor[i] }));;
        this.add(line);
    }
};

THREE.LineAxisHelper.prototype = new THREE.Object3D();
THREE.LineAxisHelper.prototype.constructor = THREE.LineAxisHelper;
