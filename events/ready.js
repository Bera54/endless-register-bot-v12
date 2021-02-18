module.exports = client => {
  client.user.setStatus("dnd");
  console.log(`${client.user.id}                                                                                                                                                                     `)
client.user.setActivity(`Endless 🧡`, { type: "WATCHING"});  
};