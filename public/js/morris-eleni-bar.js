$(function() {
	
		Morris.Bar({
	  element: 'bar-eleni',
	  data: [
	    { y: '06:00', a: 1},
	    { y: '07:10', a: 2},
	    { y: '07:50', a: 1},
	    { y: '08:45', a: 3},
	    { y: '09:30', a: 2},
	    { y: '11:05', a: 1},
	    { y: '12:10', a: 1},
	    { y: '13:30', a: 3},
	    { y: '15:00', a: 3},
	    { y: '16:10', a: 4},
	    { y: '16:50', a: 2},
	    { y: '17:20', a: 1},
	    { y: '19:10', a: 2},
	    { y: '20:20', a: 3}
	  ],
	  xkey: 'y',
	  ykeys: 'a',
	  labels: ['Number of Tokens']
	});
});