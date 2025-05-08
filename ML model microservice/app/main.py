from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from .model_runner import predict_image
from PIL import Image
import io

app = FastAPI()

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read()))
    output_image = predict_image(image)
    
    img_bytes = io.BytesIO()
    output_image.save(img_bytes, format="JPEG")
    img_bytes.seek(0)

    return StreamingResponse(img_bytes, media_type="image/jpeg")
