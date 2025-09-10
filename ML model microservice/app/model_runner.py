from PIL import Image
import numpy as np
import onnxruntime as ort
import io
from .utils import postprocess_output

# Load model
session = ort.InferenceSession("model/best.onnx")

input_name = session.get_inputs()[0].name
output_name = session.get_outputs()[0].name

def predict_image(image: Image.Image) -> Image.Image:
    print("Received image:", image.size, image.mode)
    image = image.resize((640, 640))
    img_array = np.array(image).astype(np.float32)
    img_array = np.transpose(img_array, (2, 0, 1)) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    print("Input shape:", img_array.shape)

    try:
        inputs = {session.get_inputs()[0].name: img_array}
        outputs = session.run(None, inputs)
        print("ONNX inference successful.")
        print("Output type:", type(outputs), "Length:", len(outputs))
        print("First output shape:", outputs[0].shape)
    except Exception as e:
        print("ONNX inference failed:", e)
        raise e

    print(outputs)
    output_image = postprocess_output(outputs,image)
    return output_image

