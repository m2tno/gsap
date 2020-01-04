// JavaScript Document
var t1 = gsap.timeline({repeat:2, repeatDelay: 1});
	t1.from(".box", {duration: 2, x: 250, rotation: 360, ease: "back"});
	t1.from(".testicons img", {yPercent:150, stagger:0.1, duration:1, ease:"back"});