package old;

import java.util.ArrayList;

public class Info {
	public String sid = null;
	public String sname = null;
	public ArrayList<String> couList = new ArrayList<String>();
	public ArrayList<String> scoreList = new ArrayList<String>();

	@Override
	public String toString() {
		return "Info [sid=" + sid + ", sname=" + sname + ", couList="
				+ couList.toString() + ", scoreList=" + scoreList.toString()
				+ "]";
	}

	public String[] toArray() {
		ArrayList<String> stral = new ArrayList<String>();
		stral.add(sid);
		stral.add(sname);
		for (String s : scoreList) {
			stral.add(s);
		}
		String[] str = new String[stral.size()];
		stral.toArray(str);
		return str;
	}
}
