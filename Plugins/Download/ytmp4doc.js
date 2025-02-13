// XPLOADER BOT by Tylor

module.exports = {
  command: ['ytmp4doc'],
  operate: async ({ m, text, downloadXMp4Doc, reply }) => {
    if (!text) return reply('*Please provide a valid YouTube link!*');
    
    try {
      let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!urls) return reply('*Seems like your message does not contain a valid YouTube link*');
      
      let urlIndex = parseInt(text) - 1;
      if (urlIndex < 0 || urlIndex >= urls.length) return reply('*Invalid URL index*');
      
      await downloadXMp4Doc(urls[urlIndex]);
    } catch (error) {
      console.error('ytmp4doc command failed:', error);
      reply(`Error: ${error.message}`);
    }
  }
};