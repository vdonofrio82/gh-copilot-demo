using albums_api.Controllers;
using albums_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace albums_api.Tests.Controllers
{
    public class AlbumControllerTests
    {
        private readonly AlbumController _controller;

        public AlbumControllerTests()
        {
            _controller = new AlbumController();
        }

        [Fact]
        public void Get_ReturnsOkResult()
        {
            // Act
            var result = _controller.Get();

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public void Get_ReturnsListOfAlbums()
        {
            // Act
            var result = _controller.Get() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            var albums = Assert.IsType<List<Album>>(result.Value);
            Assert.NotEmpty(albums);
        }

        [Fact]
        public void Get_ReturnsSixAlbums()
        {
            // Act
            var result = _controller.Get() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            var albums = Assert.IsType<List<Album>>(result.Value);
            Assert.Equal(6, albums.Count);
        }

        [Fact]
        public void Get_ReturnsAlbumsWithValidData()
        {
            // Act
            var result = _controller.Get() as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            var albums = Assert.IsType<List<Album>>(result.Value);
            
            foreach (var album in albums)
            {
                Assert.True(album.Id > 0);
                Assert.False(string.IsNullOrEmpty(album.Title));
                Assert.False(string.IsNullOrEmpty(album.Artist));
                Assert.True(album.Price > 0);
                Assert.False(string.IsNullOrEmpty(album.Image_url));
            }
        }

        [Fact]
        public void GetById_ReturnsOkResult()
        {
            // Arrange
            int albumId = 1;

            // Act
            var result = _controller.Get(albumId);

            // Assert
            Assert.IsType<OkResult>(result);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(100)]
        public void GetById_WithAnyId_ReturnsOkResult(int id)
        {
            // Act
            var result = _controller.Get(id);

            // Assert
            Assert.IsType<OkResult>(result);
        }
    }
}
