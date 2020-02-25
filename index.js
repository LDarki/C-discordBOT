const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("Thaigo");
  console.log("Bot activo!");
});

const prefix = "t-";

const random_frase = [
'Que bien que juego al counter',
'La facha que tengo',
'Larry anabolico',
]

client.on("message", async msg => {
  if (msg.content == prefix + "cmds")
  {
     msg.channel.send("t-hola >> Te saludo.");
     msg.channel.send("t-marselo >> Marselo.");
     msg.channel.send("t-frase >> Te tiro un par de frases.");
  }
  
  if(msg.content == prefix + "hola")
  {
    msg.channel.send("¡Hola "+ "<@" +msg.guild.member(msg.author).user.id +">" +"! ¿Cómo estás?");
  }
  
  if(msg.content == prefix + "marselo")
  {
    msg.channel.send("¡Te mando un marselo!", { files: [ "https://i.imgur.com/AwbkfyQ.jpg" ] });
  }
  
  if(msg.content == prefix + "frase")
  {
    msg.channel.send(""+random_frase[Math.floor(Math.random() * random_frase.length)]+"");
  }
});

client.login(process.env.SECRET);
