package old;

import java.io.IOException;
import java.util.ArrayList;

public class InfoReader {

	public ArrayList<OriInfo> getOriInfo(String path) {
		XlsReader reader = new XlsReader();
		ArrayList<String> infoList = null;
		ArrayList<OriInfo> oriInfoList = new ArrayList<OriInfo>();
		try {
			infoList = reader.readXls(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		infoList.remove(0);
		for (int i = 0; i < infoList.size(); i++) {
			String[] infSp = infoList.get(i).split("£»");
			OriInfo inf = new OriInfo();
			inf.sid = infSp[0].trim();
			inf.sname = infSp[1].trim();
			inf.cid = infSp[2].trim();
			inf.cname = infSp[3].trim();
			inf.term = infSp[4].trim();
			inf.scoreType = infSp[5].trim();
			if (infSp[6].trim().equals("") || infSp[6].trim().equals("null")) {
				inf.score = -1000;
			} else if (infSp[6].trim().contains(".")) {
				inf.score = (int) Double.parseDouble(infSp[6].trim()) + 1;
			} else {
				inf.score = Integer.parseInt(infSp[6].trim());
			}
			inf.comment1 = infSp[7].trim();
			inf.comment2 = infSp[8].trim();
			oriInfoList.add(inf);
		}
		return oriInfoList;
	}

	public ArrayList<Info> getInfo(String path) {
		XlsReader reader = new XlsReader();
		ArrayList<String> infoListStr = null;
		ArrayList<Info> infoList = new ArrayList<Info>();
		try {
			infoListStr = reader.readXls(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Info title = new Info();
		String[] infSp = infoListStr.get(0).split("£»");
		for (int i = 0; i < infSp.length; i++) {
			if (!(infSp[i].equals("") || infSp[i].equals("null")))
				title.couList.add(infSp[i]);
		}
		//infoList.add(title);
		for (int i = 1; i < infoListStr.size(); i++) {
			Info inf = new Info();
			inf.sid = infoListStr.get(i).split("£»")[0].trim();
			inf.sname = infoListStr.get(i).split("£»")[1].trim();
			inf.couList = title.couList;
			infoList.add(inf);
			System.out.println(inf);
		}
		return infoList;
	}
}
