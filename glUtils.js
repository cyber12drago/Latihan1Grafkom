(function(global){
    var glUtils = {
        VERSION: '0.0.1',
        checkWebGL: function(canvas){
            var contexts= ["webgl","moz-webgl","experimental-webgl"]; 
            var gl;   
            for(let i=0; i< contexts.length;i++){
                try{
                    gl = canvas.getContext(contexts[i]);
                }
                    catch(error){
                        //Sementara kosong
                    }
                if(gl){
                    break;
                }
            }
            if(!gl){
                alert("WebGl tidak ditemukan. Tolong gunakan Chrome/Firefox terbaru.")
            }
            return gl;
        },
            getShader: function(gl, type, source) {
                var shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            },
            createProgram: function(gl, VertexShader, FragmentShader){
                var program = gl.createProgram();
                gl.attachShader(program, VertexShader);
                gl.attachShader(program, FragmentShader);
                gl.linkProgram(program);
                if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
                    console.log("Program gagal di-link: "+gl.getProgramInfoLog(program))
                    gl.deleteProgram(program);
                    gl.deleteShader(VertexShader);
                    gl.deleteShader(FragmentShader);
                    return null;
                }
                return program;

            }
    }
    global.glUtils= glUtils;
})(window|| this);