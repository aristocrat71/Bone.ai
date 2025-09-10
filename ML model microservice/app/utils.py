from PIL import ImageDraw, ImageFont
import numpy as np

CLASSES = ["class0", "class1", "class2", "class3", "class4", "class5"]  # your class names

def postprocess_output(outputs, image, conf_threshold=0.4):
    detections = outputs[0]  # shape: (1, 11, 8400)
    detections = detections[0]  # shape: (11, 8400)

    boxes = []
    scores = []
    class_ids = []

    for i in range(detections.shape[1]):  # loop over each anchor box
        x, y, w, h = detections[0:4, i]
        obj_conf = detections[4, i]
        class_probs = detections[5:, i]

        score = obj_conf * np.max(class_probs)
        class_id = np.argmax(class_probs)

        if score > conf_threshold:
            # Convert box format
            x1 = int((x - w / 2) * image.width)
            y1 = int((y - h / 2) * image.height)
            x2 = int((x + w / 2) * image.width)
            y2 = int((y + h / 2) * image.height)

            boxes.append((x1, y1, x2, y2))
            scores.append(score)
            class_ids.append(class_id)

    # Draw boxes on the image
    draw = ImageDraw.Draw(image)
    font = ImageFont.load_default()

    for (box, score, class_id) in zip(boxes, scores, class_ids):
        draw.rectangle(box, outline="red", width=2)
        label = f"{CLASSES[class_id]}: {score:.2f}"
        draw.text((box[0], box[1] - 10), label, fill="white", font=font)

    return image
