var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDdhYjJmYjc0ZDAwMTFiZTdmN2UiLCJ1c2VybmFtZSI6InZzZWJ5ZGV0a2FrbmFkb0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTQ3ODIxMzkzMH0.-y5htdFL3M-Ku8-BARn8HVQkmOqB2TErkuKCNr16uf0';
var skb = new Skb(token);

skb.taskHelloWorld('Hello Node.js');