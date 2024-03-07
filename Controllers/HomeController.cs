using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinaDevProject.Models;
using Microsoft.AspNetCore.Mvc;


namespace FinaDevProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = _productRepository.GetAllProducts();
            return Ok(products);
        }
        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = _productRepository.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
        [HttpPost]
        public IActionResult AddProduct([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            _productRepository.AddProduct(product);
            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] Product product)
        {
            if (product == null || id != product.Id)
            {
                return BadRequest();
            }
            var existingProduct = _productRepository.GetProductById(id);
            if (existingProduct == null)
            {
                return NotFound();
            }
            _productRepository.UpdateProduct(product);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var existingProduct = _productRepository.GetProductById(id);
            if (existingProduct == null)
            {
                return NotFound();
            }
            _productRepository.DeleteProduct(id);
            return NoContent();
        }
    }
}

