package com.diegovp.dvp.dto;

import java.io.Serializable;

import com.diegovp.dvp.entities.About;

public class AboutDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String content;

	public AboutDTO() {
	}

	public AboutDTO(Long id, String content) {
		this.id = id;
		this.content = content;
	}

	public AboutDTO(About entity) {
		id = entity.getId();
		content = entity.getContent();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
