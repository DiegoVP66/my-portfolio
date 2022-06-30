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
	private String repository;

	public ProjectDTO() {
	}

	public ProjectDTO(Long id, String title, String image, String content, String link, String repository) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.content = content;
		this.link = link;
		this.repository = repository;
	}

	public ProjectDTO(Project entity) {
		id = entity.getId();
		title = entity.getTitle();
		image = entity.getImage();
		content = entity.getContent();
		link = entity.getLink();
		repository = entity.getRepository();
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

	public String getRepository() {
		return repository;
	}

	public void setRepository(String repository) {
		this.repository = repository;
	}

}
