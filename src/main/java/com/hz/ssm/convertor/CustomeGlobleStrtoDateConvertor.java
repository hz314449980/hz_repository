package com.hz.ssm.convertor;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

public class CustomeGlobleStrtoDateConvertor implements Converter<String, Date>{

	@Override
	public Date convert(String source) {
		if (source != "" && source.trim() != "") {
			try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			
				return sdf.parse(source);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		
		
		return null;
	}

}
