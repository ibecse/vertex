const logger = require('../libs/logger');
const TorrentMod = require('../model/TorrentMod');

const torrentMod = new TorrentMod();

class Torrent {
  async list (req, res) {
    const options = req.query;
    try {
      const r = await torrentMod.list(options);
      res.send({
        success: true,
        data: r
      });
    } catch (e) {
      logger.error(e);
      res.send({
        success: false,
        message: e
      });
    }
  };

  async info (req, res) {
    const options = req.query;
    try {
      const r = torrentMod.info(options);
      res.send({
        success: true,
        data: r
      });
    } catch (e) {
      logger.error(e);
      res.send({
        success: false,
        message: e
      });
    }
  };

  async listHistory (req, res) {
    const options = req.query;
    try {
      const r = await torrentMod.listHistory(options);
      res.send({
        success: true,
        data: r
      });
    } catch (e) {
      logger.error(e);
      res.send({
        success: false,
        message: e
      });
    }
  };

  async listRss (req, res) {
    const options = req.query;
    try {
      const r = await torrentMod.listRss(options);
      res.send({
        success: true,
        data: r
      });
    } catch (e) {
      logger.error(e);
      res.send({
        success: false,
        message: e
      });
    }
  };
}
module.exports = Torrent;
