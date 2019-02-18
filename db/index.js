const mysql = require('mysql');

const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getHome = (homeId, callback) => {
  // send query, process data, callback with data
  let query = 'SELECT home.id as id, home.totalPrice as totalPrice, hd.description as description, ';
  query += ' ov.type as ovType, ov.rooms as ovRooms, ov.baths as ovBaths, ov.builtIn as ovBuiltIn, ov.howlongOnTrulia as ovHowlongOnTrulia, ';
  query += ' ov.lotSize as ovLotSize, ov.sqft as ovSqft, ov.pricePerSqft as ovPricePerSqft, ov.priceHOA as ovPriceHOA, ov.views as ovViews, ';
  query += ' li.updatedAt as liUpdatedAt, li.rooms as liRooms, li.baths as liBaths, li.type as liType, li.sqft as liSqft, li.lotSize as liLotSize, ';
  query += ' pr.updatedAt as prUpdatedAt, pr.rooms as prRooms, pr.baths as prBaths, pr.type as prType, pr.sqft as prSqft, pr.lotSize as prLotSize ';
  query += ' FROM home, homeDetails AS hd, overview as ov, features as ft, listingInfo as li, publicRecords as pr ';
  query += ' WHERE hd.id = home.detailsId AND ov.id = hd.overviewId AND ft.id = hd.featuresId AND li.id = ft.listingInfoId AND pr.id = ft.publicRecordsId';
  query += ' AND home.id = ?';
  connection.query(query, [homeId], (err, data) => {
    if (err) {
      callback(err);
    } else {
      query = 'SELECT ph.id, ph.historyDate, ph.price, ph.event, ';
      query += ' phd.recordingDate, phd.contractDate, phd.salePrice, phd.priceType, phd.countyTransferTax, phd.totalTransferTax, ';
      query += ' phd.transactionType, phd.documentType, phd.priceChange, phd.source ';
      query += ' FROM home, homeDetails as hd, priceHistory as ph ';
      query += ' LEFT JOIN priceHistoryDetails as phd ON phd.id = ph.detailsId ';
      query += ' WHERE hd.id = home.detailsId AND hd.id = ph.homeDetailsId ';
      query += ' AND home.id = ? ORDER BY STR_TO_DATE(ph.historyDate, \'%m/%d/%Y\') DESC ';
      connection.query(query, [homeId], (err2, priceHistoryData) => {
        if (err2) {
          callback(err2);
        } else {
          data[0].priceHistoryData = priceHistoryData; // eslint-disable-line no-param-reassign
          callback(null, data[0]);
        }
      });
    }
  });
};

const getSimilarHomes = (homeId, callback) => {
  let query = 'SELECT sh.id, sh.image, sh.price, sh.rooms, sh.baths, sh.address1, sh.address2 ';
  query += ' FROM home, similarHomes sh ';
  query += ' WHERE home.id = sh.homeId ';
  query += ' AND home.id = ? ';
  connection.query(query, homeId, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getHome,
  getSimilarHomes,
};
