package old;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

public class XlsReader {
	public ArrayList<String> readXls(String path) throws IOException {
		ArrayList<String> xls = new ArrayList<String>();
		InputStream is = new FileInputStream(path);
		HSSFWorkbook hssfWorkbook = new HSSFWorkbook(is);
		HSSFSheet hssfSheet = hssfWorkbook.getSheetAt(0);

		for (int rowNum = 0; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
			String s = new String();
			HSSFRow hssfRow = hssfSheet.getRow(rowNum);
			if (hssfRow == null) {
				continue;
			}

			for (int cellNum = 0; cellNum <= hssfRow.getLastCellNum(); cellNum++) {
				HSSFCell hssfCell = hssfRow.getCell(cellNum);
				if (hssfCell == null) {
					s += "null" + "£»";
//					System.out.print("\t | \tnull");
				} else {

					s += getValue(hssfCell).trim() + "£»";
//					System.out.print("\t | \t" + getValue(hssfCell));
				}
			}
			xls.add(s);
//			System.out.println();
		}
		return xls;
	}

	private String getValue(HSSFCell hssfCell) {
		if (hssfCell.getCellType() == HSSFCell.CELL_TYPE_BOOLEAN) {
			return String.valueOf(hssfCell.getBooleanCellValue());
		} else if (hssfCell.getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
			return String.valueOf((long) hssfCell.getNumericCellValue());
		} else if (hssfCell.getCellType() == HSSFCell.CELL_TYPE_BLANK) {
			return "null";
		} else {
			return String.valueOf(hssfCell.getStringCellValue());
		}
	}
}
