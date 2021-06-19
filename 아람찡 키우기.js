const FS = FileStream, path = '/sdcard/chatmsgbot/lv.json';
if(!new java.io.File(path).canRead()) FS.write(path, '{}');
let lv = JSON.parse(FS.read(path));
path1 = '/sdcard/chatmsgbot/lvt.json';
if(!new java.io.File(path1).canRead()) FS.write(path1, '{}');
let lvt = JSON.parse(FS.read(path1));
path2 = '/sdcard/chatmsgbot/먹이.json';
if(!new java.io.File(path2).canRead()) FS.write(path2, '{}');
var 먹이 = JSON.parse(FS.read(path2));
var a = "밥";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
 Lw = '\u200b'.repeat(500);

  if (!lv[sender]) lv[sender] = {'lv':1, 'xp':0};
if (!lvt[sender]) lvt[sender] = {'lvt':1, 'xpt':27};
  if (!먹이[sender]) 먹이[sender] = {'먹이':a};
  
         if(msg.startsWith("!밥추가 ")){
        var Y=msg.substring(5);
         먹이[sender] = {'먹이':Y};
         
         replier.reply("\""+Y+"\" 를 밥으로 추가했어요"+Lw+"\n이제 "+sender+" 님의 아람찡 먹이는 \""+Y+"\" 인거시에요");
       FS.write(path2, JSON.stringify(먹이));
       }

    if(lv[sender].xp>=80){
        ++lv[sender].lv;
        lv[sender].xp -= 80;
        }
        if(lvt[sender].xpt>=107){
        ++lvt[sender].lvt;
        lvt[sender].xpt -= 80;
        }
        if(msg=="!밥주기"){
          lvt[sender].xpt += 27;
          lv[sender].xp += 27;
          replier.reply("아람찡이 "+먹이[sender].먹이+" 을 (를) 먹고 무럭 무럭 자라빈다\n"+lv[sender].xp+" => "+lvt[sender].xpt+"\n아직 "+lv[sender].lv+" 레벨 인거시에요");
          FS.write(path, JSON.stringify(lv));
          FS.write(path1, JSON.stringify(lvt));
          }
          
          if (msg=="!내정보"){
          lv[sender].xp += 27;
        replier.reply(sender+" 님의 아람찡\n"+lv[sender].xp+" xp"+"\n"+lv[sender].lv+" 레벨 인거시에요");
         lv[sender].xp -= 27;
         }
    }
