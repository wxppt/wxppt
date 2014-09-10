package old;

import java.io.IOException;
import java.util.ArrayList;

public class Launcher {
	public static void main(String[] args) {
		InfoReader reader = new InfoReader();
		ArrayList<OriInfo> oriInfoList = reader.getOriInfo("f:/1.xls");
		ArrayList<Info> infoList = reader.getInfo("f:/2.xls");
		for (OriInfo i : oriInfoList) {
			System.out.println(i);
		}

		for (Info i : infoList) {
			System.out.println(i);
		}
		System.out.println("读取信息完成！！");

		for (Info i : infoList) {
			for (String course : i.couList) {
				boolean ifExist = false;
				boolean ifLog = false;
				int term = Integer.MAX_VALUE;
				for (OriInfo oi : oriInfoList) {
					if(oi.sid.equals(i.sid)) {
						if (oi.cname.contains(course)) {
							if(Integer.parseInt(oi.term) < term) {
								if (oi.scoreType.contains("注销")) {
										if (ifLog) {
											i.scoreList.remove(i.scoreList.size() - 1);
										}
										if (oi.comment1.contains("补考")
												|| oi.comment2.contains("补考")
												|| oi.score == -1000) {
											i.scoreList
													.add(oi.comment1 + "-" + oi.comment2);
										} else {
											i.scoreList.add("注销前：" + oi.score);
										}
										ifLog = true;
										term = Integer.parseInt(oi.term);
										ifExist = true;
								} else {
									if (ifLog) {
										i.scoreList.remove(i.scoreList.size() - 1);
									}
									if (oi.comment1.contains("补考")
											|| oi.comment2.contains("补考")
											|| oi.score == -1000) {
										i.scoreList
												.add(oi.comment1 + "-" + oi.comment2);
									} else {
										i.scoreList.add("" + oi.score);
									}
									ifLog = true;
									term = Integer.parseInt(oi.term);
								}
							}
							ifExist = true;
						}
					}
				}
				if (!ifExist) {
					i.scoreList.add("未找到此项成绩");
				}
			}
		}
		
		System.out.println("信息处理完成！！");
		
		String[][] content = new String[infoList.size()][infoList.get(0).scoreList.size()+2];
		ArrayList<String> headal = new ArrayList<String>(infoList.get(0).couList);
		headal.add(0,"学号");
		headal.add(1,"姓名");
		for (int i = 0;i< content.length;i++) {
			content[i] = infoList.get(i).toArray();
		}
		XlsWriter writer = new XlsWriter();
		try {
			String[] head = new String[headal.size()];
			headal.toArray(head);
			writer.buildXls(head, content, "f:/3.xls");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
