package com.diegovp.dvp.dto;

import java.io.Serializable;

import com.diegovp.dvp.entities.Project;

public class ProjectDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String title;
	private String image;
	private String content;
	private String link;

	public ProjectDTO() {
	}

	public ProjectDTO(Long id, String title, String image, String content, String link) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.content = content;
		this.link = link;
	}

	public ProjectDTO(Project entity) {
		id = entity.getId();
		title = entity.getTitle();
		image = entity.getImage();
		content = entity.getContent();
		link = entity.getLink();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

}
