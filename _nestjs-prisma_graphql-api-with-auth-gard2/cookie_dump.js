//const cookieParser = require('cookie-parser');
import  cookieParser from 'cookie-parser';

// ブラウザから取得したCookie文字列（例: connect.sidの値）
//const rawCookie = "s%3AセッションID.署名部分"; 
const rawCookie = "s%3AUXfucB7QYa7MEORgvUrilzDiPZ5z2ePT.nlJi1CHdYHzWMC8UdGPqJguus5pzQUe9hagD7khYvyc"; 
const secret = "gusa";

// 1. URIデコード（%3A を : に戻す）
const decodedCookie = decodeURIComponent(rawCookie);

// 2. 署名の検証とセッションIDの抽出
const sessionId = cookieParser.signedCookie(decodedCookie, secret);

if (sessionId === false) {
  console.log("署名が一致しません。改ざんされている可能性があります。");
} else {
  console.log("デコードされたセッションID:", sessionId);
}
