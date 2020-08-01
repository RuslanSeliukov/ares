package com.ares.rest;

import com.ares.models.AddProductRequest;
import com.ares.models.db.Book;
import com.ares.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AddProductRestController {

    @Autowired
    BookRepository bookRepository;

    @PostMapping(value = "/addProduct", consumes = "multipart/form-data", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> index(@ModelAttribute AddProductRequest addProductRequest) {
        Book book = new Book();
        book.setBookName(addProductRequest.getBookName());
        book.setAuthor(addProductRequest.getAuthor());
        book.setPrice(addProductRequest.getPrice());
        book.setPublisher(addProductRequest.getPublisher());
        book.setLanguage(addProductRequest.getLanguage());
        book.setPublicationDate(addProductRequest.getPublicationDate());
        book.setPrintLength(addProductRequest.getPrintLength());
        book.setProductDimension(addProductRequest.getProductDimensions());
        book.setBinding(addProductRequest.getBinding());
        book.setIsbn(addProductRequest.getIsbn());
        book.setDescription(addProductRequest.getDescription());

        try {
            book.setPictureData(addProductRequest.getFile().getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        bookRepository.save(book);

        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "/getBooks", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping(value = "/getBookInfo", produces = MediaType.APPLICATION_JSON_VALUE)
    public Book getBookInfo(@RequestParam String bookId) {
        return bookRepository.findById(bookId).orElse(new Book());
    }

    @PostMapping(value = "/placeOrder", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> placeOrder(@ModelAttribute AddProductRequest addProductRequest) {
        return ResponseEntity.ok().build();
    }

}
