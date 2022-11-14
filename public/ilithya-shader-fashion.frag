precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float rand(vec2 n){
    return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);
}

void main(){
    vec2 uv=(gl_FragCoord.xy-u_resolution*.5)/u_resolution.yy+.5;
    uv*=2.1;

    float n=2.5;
    vec2 points=fract(uv*n);

    float circleA=distance(points,vec2(0.));
    float circleB=distance(points,vec2(1.));

    vec2 pos=ceil(fract(vec2(circleA,circleB)*n-sin(u_time*.25))*n*1.5);
    vec3 color=vec3(sin(u_time*4.*rand(pos)));

    vec3 colorA=vec3(1.,.75,.9);// pink
    vec3 colorB=vec3(.4,.45,1.);// purple
    vec3 colorC=vec3(.4,1,.85);// aqua

    color=mix(colorA,colorC,color);

    // DOTS
    color*=step(.012*sin(u_time)+.05,distance(points,vec2(.5)));

    gl_FragColor=vec4(color,1.);
}
