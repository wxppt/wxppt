package old;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

public class XlsWriter {
	public File buildXls(ArrayList<String> headal, ArrayList<String> stral,
			String regex, String path) throws IOException {
		String[] head = (String[]) headal.toArray();
		String[][] str = new String[stral.size()][stral.get(0).split(regex).length];
		for (int i = 0; i < str.length; i++) {
			str[i] = stral.get(i).split(regex);
		}
		return buildXls(head, str, path);

	}

	public File buildXls(String[] head, String[][] str, String path)
			throws IOException {
		// 创建Excel的Workbook，对应到一个Excel文档
		HSSFWorkbook wb = new HSSFWorkbook();
		// 创建Excel的工作sheet，对应到一个excel文档的tab
		HSSFSheet sheet = wb.createSheet();
		// 行指针
		HSSFRow row = null;
		// 单元格指针
		HSSFCell cell = null;

		// 创建表头
		row = sheet.createRow(0);
		// 表头样式
		HSSFCellStyle style = wb.createCellStyle();
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		// 表头字体加粗
		HSSFFont font = wb.createFont();
		font.setFontHeight((short) 250);
		font.setBoldweight((short) 100);
		style.setFont(font);

		for (int i = 0; i < head.length; i++) {
			sheet.setColumnWidth(i, 4000);
			cell = row.createCell(i);
			cell.setCellValue(head[i]);
			cell.setCellStyle(style);
		}

		// 遍历行
		for (int i = 0; i < str.length; i++) {
			row = sheet.createRow(i + 1);
			for (int j = 0; j < str[i].length; j++) {
				cell = row.createCell(j);
				cell.setCellValue(str[i][j]);
			}
		}
		// 写文件
		FileOutputStream fos = new FileOutputStream(path);
		wb.write(fos);
		fos.flush();
		fos.close();
		return new File(path);
	}
}
